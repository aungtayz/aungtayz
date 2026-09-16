export default function Section({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col h-[75vh]   snap-start  items-center justify-center">
      {children}
    </section>
  )
}