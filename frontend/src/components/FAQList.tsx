import { BrandSetting } from '../types/brand'

export default function FAQList({ brand }: { brand: BrandSetting }) {
  return (
    <div className="bg-white shadow p-6 rounded border">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Preguntas frecuentes - {brand.name}
      </h3>

      <ul className="space-y-4 list-disc pl-6 text-gray-800">
        <li>
          <strong>¿Cómo puedo publicar un producto para la venta?</strong>
          <p>
            ¡Publicar tu producto es muy fácil! Simplemente haz clic en "Vender", crea una cuenta y sigue el proceso de publicación. Una vez que completes el formulario de venta, será revisado por nuestro equipo y en un plazo máximo de 24 horas, te avisaremos si está aprobada o rechazada.
          </p>
        </li>

        <li>
          <strong>¿Cómo envío mi artículo después de que alguien lo compra?</strong>
          <p>
            {brand.shippingOptions?.includes('blue_express')
              ? 'Puedes enviarlo con retiro a domicilio o por Blue Express.'
              : 'Solo puedes enviarlo con retiro a domicilio.'}
          </p>
        </li>

        <li>
          <strong>¿Cómo y cuándo recibo el pago?</strong>
          <p>
            {brand.paymentOptions?.includes('coupon') &&
            brand.paymentOptions?.includes('bank_transfer')
              ? 'Puedes recibir el 100% en un cupón de descuento o el 80% por transferencia bancaria.'
              : 'Solo puedes recibir pagos por transferencia bancaria.'}
          </p>
        </li>

        <li>
          <strong>¿Hay cobros adicionales por vender mi producto por acá?</strong>
          <p>
            {brand.requiresSanitization
              ? `Se descontarán $${brand.sanitizationCost} por el lavado y sanitizado del producto.`
              : brand.requiresWorkshopReview
              ? 'El producto será revisado por el taller. Si no está limpio, se descontará el costo de la tintorería.'
              : 'No hay cobros adicionales asociados a esta marca.'}
          </p>
        </li>

        {brand.supportsCoupons && (
          <li>
            <strong>Política de uso de cupones</strong>
            <p>Los cupones que recibas por la venta de tus productos tienen las siguientes restricciones:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>
                Solo pueden utilizarse para compras en{' '}
                <a href={brand.siteUrl} target="_blank" className="text-blue-600 underline">
                  {brand.siteUrl}
                </a>.
              </li>
              <li>La vigencia del cupón es de 6 meses desde su emisión.</li>
              <li>El monto mínimo de compra debe ser igual al valor del cupón + $1.000 CLP.</li>
            </ul>
          </li>
        )}
      </ul>
    </div>
  )
}
