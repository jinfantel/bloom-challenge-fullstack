'use client'
import { Brand } from '../types/brand'

type Props = {
  brands: Brand[]
  onSelect: (id: string) => void
}

export default function BrandSelector({ brands, onSelect }: Props) {
  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      {brands.map((brand) => (
        <button
          key={brand.id}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => onSelect(brand.id)}
        >
          {brand.name}
        </button>
      ))}
    </div>
  )
}
