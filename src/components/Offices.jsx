import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Datcrazy LLP" invert={invert}>
          B-014 , Babylon tower, Telibandha
          <br />
          492001, Raipur, Chhattisgarh
        </Office>
      </li>
      <li>
        <Office name="Whatsapp" invert={invert}>
          +91-9009045227
          <br />
          
        </Office>
      </li>
    </ul>
  )
}
