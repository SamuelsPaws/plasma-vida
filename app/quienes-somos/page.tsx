'use client'
import ImagesGrid from "./components/ImagesGrid"

export default function About() {
    return (
        <main className="pt-mob-header-height lg:pt-header-height">
            {/* Banner */}
            <div className="
                h-[200px] lg:h-[340px] p-8 lg:p-16 relative
                flex items-end
                bg-[url('/assets/hero-img.webp')] bg-cover
                before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#0007_60%,#fff1)]"
            >
                <h1 className="
                    relative
                    text-3xl lg:text-7xl text-white-1 font-bold"
                >
                    ¿Quiénes somos?
                </h1>
            </div>
            <section className="
                lg:min-h-[400px] p-6 lg:p-12
                flex flex-col lg:flex-row gap-8
                bg-[#ececec]"
            >
                <div className="
                    w-[60%] p-6
                    bg-white-1 rounded-2xl"
                >
                    <h2 className="mb-2 text-2xl font-bold">Un equipo comprometido en ofrecer productos de calidad.</h2>
                    <p className="text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores qui odit dolorum ea quisquam sed corrupti earum accusantium dolores aperiam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quis ducimus repellat eos nemo incidunt?</p>
                    <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum deleniti in reprehenderit at ullam voluptas tempora nulla iusto? Unde molestiae, quidem impedit autem placeat culpa fuga! Laudantium velit iste qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, architecto vel quae quas repellat expedita sed repellendus optio recusandae error? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum error mollitia ex, obcaecati nemo nisi enim vero dolorem ducimus consequatur!</p>
                    <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum deleniti in reprehenderit at ullam voluptas tempora nulla iusto? Unde molestiae, quidem impedit autem placeat culpa fuga! Laudantium velit iste qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, architecto vel quae quas repellat expedita sed repellendus optio recusandae error? Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum deleniti in reprehenderit at ullam voluptas tempora nulla iusto? Unde molestiae, quidem impedit autem placeat culpa fuga! Laudantium velit iste qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, architecto vel quae quas repellat expedita sed repellendus optio recusandae error? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum error mollitia ex, obcaecati nemo nisi enim vero dolorem ducimus consequatur!</p>
                    <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum deleniti in reprehenderit at ullam voluptas tempora nulla iusto? Unde molestiae, quidem impedit autem placeat culpa fuga! Laudantium velit iste qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, architecto vel quae quas repellat expedita sed repellendus optio recusandae error? Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                {/* Right div with images */}
                <ImagesGrid />
            </section>
        </main>
    )
}