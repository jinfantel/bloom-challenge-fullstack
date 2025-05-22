'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Brand, BrandSetting } from '../types/brand'
import BrandSelector from '../components/BrandSelector'
import FAQList from '../components/FAQList'

export default function Page() {
  const [brands, setBrands] = useState<Brand[]>([])
  const [selectedBrand, setSelectedBrand] = useState<BrandSetting | null>(null)

  useEffect(() => {
    fetch('http://localhost:8000/brands')
      .then((res) => res.json())
      .then(setBrands)
  }, [])

  const handleSelect = (id: string) => {
    fetch(`http://localhost:8000/brands/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedBrand(data.settings)
      })
  }

  return (
    <div className="flex h-full w-full flex-col p-8">
      <Image
        className="h-14 w-auto self-end"
        src="/images/Logo-Bloom.png"
        alt="Logo"
        width={400}
        height={100}
      />
      <div>
        <h1 className="text-center text-4xl">Desafío Dev</h1>
      </div>

      <div className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Selecciona una marca</h2>
        <BrandSelector brands={brands} onSelect={handleSelect} />
        {selectedBrand && <FAQList brand={selectedBrand} />}
      </div>
    </div>
  )
}