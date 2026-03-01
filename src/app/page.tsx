import { MdOutlineMailOutline } from "react-icons/md";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-12 py-10">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-normal tracking-tight text-gray-900">
          PlainShed
        </h1>
        <p className="mt-1 text-sm text-gray-500">Tech as Play.</p>
      </header>

      <div className="max-w-2xl mx-auto">
         {/* Products */}
        <section className="mt-24">
          <h2 className="text-sm font-medium tracking-widest text-neutral-400 uppercase mb-6">
            Products
          </h2>
          <div className="space-y-4">
            <a
              href="https://lifemintcollege.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-neutral-200 rounded-lg px-6 py-5 hover:border-neutral-400 transition-colors"
            >
              <div className="font-semibold text-base text-gray-800">Lifemint College</div>
              <div className="mt-1 text-sm text-neutral-600">
                「習慣で単位を取得できる」大学をテーマにした習慣管理サービス。
              </div>
            </a>
          </div>
        </section>

         {/* Profile Section */}
        <section className="mt-14 flex items-center gap-14">
          {/* Avatar */}
          <div className="flex-shrink-0 w-27 h-27 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm tracking-wide">Avatar</span>
          </div>

          {/* Bio */}
          <div className="text-gray-800 leading-relaxed">
           <div className="flex items-center gap-2 mb-1">
             <p className="text-base font-medium">Kengo Imai</p>
              <a
               href="mailto:ki@plainshed.com"
               aria-label="メールで連絡する"
               className="text-neutral-400 hover:text-black transition-colors"
              >
               <MdOutlineMailOutline size={16} />
             </a>
          </div>
            <p className="text-sm text-gray-600">
              1989年生まれ。
              <br />
              大阪大学卒業後、公務員を経て民間企業に入社。
              <br />
              2026年2月、個人開発プロジェクト「PlainShed」始動。
            </p>
          </div>
        </section>

       
        {/* Footer */}
        <footer className="mt-14 text-sm text-neutral-600">
          <div>© 2026 Kengo Imai</div>
        </footer>
      </div>
    </main>
  );
}