export default function Home() {
  return (
    <main className="flex-1 max-w-[680px] mx-auto w-full px-10 pt-16 pb-20">

      {/* Tagline */}
      <p className="italic text-sm text-muted mb-5 tracking-wide">
        simple is core, fun is more.
      </p>

      {/* Catchcopy */}
      <h1 className="font-serif text-[clamp(32px,5vw,48px)] font-normal text-blue leading-[1.3] mb-6">
        飾らない。<br />
        ただ、面白いもの。
      </h1>

      {/* Description */}
      <p className="text-[15px] text-muted leading-[1.8] mb-12">
        PlainShedは、静かな個人開発スタジオです。<br />
        ミニマルな心地よさと、ダイレクトな楽しさにこだわりました。
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 mb-14 max-w-[320px]">
        <div>
          <p className="text-xs text-muted mb-1.5">創業</p>
          <p className="text-[17px] text-navy font-medium">2026.03.01</p>
        </div>
        <div>
          <p className="text-xs text-muted mb-1.5">リリース</p>
          <p className="text-[17px] text-navy font-medium">Coming soon</p>
        </div>
      </div>

      {/* Topics */}
      <section>
        <p className="text-[11px] tracking-[0.14em] uppercase text-navy mb-4">
          Topics
        </p>
        <ul className="list-none p-0 m-0 flex flex-col gap-3">
          {[
            { date: "2026.03.15", title: "公式サイト開設" },
            { date: "2026.03.01", title: "PlainShed創業" },
          ].map((item) => (
            <li key={item.date} className="flex gap-5 text-sm">
              <span className="text-muted shrink-0">{item.date}</span>
              <span className="text-navy">{item.title}</span>
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}