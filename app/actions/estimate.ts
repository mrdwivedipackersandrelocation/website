'use server'

export type MoveSize = '1bhk' | '2bhk' | '3bhk' | 'office'

export type EstimateState =
  | { status: 'idle' }
  | { status: 'error'; message: string; fieldErrors: Partial<Record<EstimateField, string>> }
  | {
      status: 'success'
      min: number
      max: number
      interCity: boolean
      pickup: string
      drop: string
      date: string
      phone: string
      size: MoveSize
    }

type EstimateField = 'pickup' | 'drop' | 'date' | 'phone' | 'size'

const basePrice: Record<MoveSize, { local: [number, number]; interCity: [number, number] }> = {
  '1bhk': { local: [4500, 8000], interCity: [12000, 22000] },
  '2bhk': { local: [7500, 13000], interCity: [18000, 32000] },
  '3bhk': { local: [11000, 19000], interCity: [26000, 45000] },
  office: { local: [18000, 40000], interCity: [45000, 95000] },
}

const MAX_LOCATION_LENGTH = 120

function clean(value: FormDataEntryValue | null) {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ').slice(0, MAX_LOCATION_LENGTH) : ''
}

function cityKey(location: string) {
  const parts = location.toLowerCase().split(',').map((p) => p.trim()).filter(Boolean)
  return parts.at(-1) ?? ''
}

export async function calculateEstimate(_prev: EstimateState, formData: FormData): Promise<EstimateState> {
  const pickup = clean(formData.get('pickup'))
  const drop = clean(formData.get('drop'))
  const date = clean(formData.get('date'))
  const phone = clean(formData.get('phone')).replace(/[\s-]/g, '')
  const size = clean(formData.get('size')) as MoveSize

  const fieldErrors: Partial<Record<EstimateField, string>> = {}

  if (pickup.length < 2) fieldErrors.pickup = 'Please enter a pickup location.'
  if (drop.length < 2) fieldErrors.drop = 'Please enter a drop location.'
  if (!(size in basePrice)) fieldErrors.size = 'Please choose a move size.'

  const parsedDate = new Date(`${date}T00:00:00`)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  if (!date || Number.isNaN(parsedDate.getTime())) {
    fieldErrors.date = 'Please choose a moving date.'
  } else if (parsedDate < today) {
    fieldErrors.date = 'Moving date cannot be in the past.'
  }

  const normalizedPhone = phone.replace(/^(\+91|91|0)(?=\d{10}$)/, '')
  if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
    fieldErrors.phone = 'Enter a valid 10-digit Indian mobile number.'
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { status: 'error', message: 'Please fix the highlighted fields.', fieldErrors }
  }

  const interCity = cityKey(pickup) !== cityKey(drop)
  const [min, max] = basePrice[size][interCity ? 'interCity' : 'local']

  return {
    status: 'success',
    min,
    max,
    interCity,
    pickup,
    drop,
    date,
    phone: normalizedPhone,
    size,
  }
}
