interface Ibutton {
  title: string
  className?: string
}

export const Button = ({ title, className }: Ibutton) => {
  return (
    <div className="flex items-center justify-center w-full">
      <button className={`rounded-2xl px-4 py-2 border border-blue-900 w-full ${className}`}>{title}</button>
    </div>
  )
}