export default function SectionHeading({
  kicker,
  title,
  description,
  center = false
}: {
  kicker: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-accent">{kicker}</span>
      <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base text-white/60">{description}</p>}
    </div>
  );
}
