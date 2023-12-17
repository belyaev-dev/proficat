
const Main = (): JSX.Element => {
    return (
        <header className="bg-gray-950 flex flex-col justify-center items-stretch">
            <div className="flex w-full flex-col items-center pt-7 pb-12 px-16 max-md:max-w-full max-md:px-5">
                <div className="flex w-[1257px] max-w-full flex-col items-stretch mb-32 max-md:mb-10">
                    <div className="flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                        <div className="flex gap-4 items-start">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6fd40f743c77eaa579aa98b1ed35a765548cbd6e918e4ce48eacf2541be4905?apiKey=0b50e676c0344a549b038dfc8be2dafd&"
                                className="aspect-[1.36] object-contain object-center w-[15px] fill-stone-200 overflow-hidden shrink-0 max-w-full"
                            />
                            <header
                                className="text-white text-2xl font-light leading-8 tracking-tight"
                                aria-label="Page title"
                            >
                                О проекте
                            </header>
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/faedea2cb318f37c3645aecaa29ebbe75b6238e296775937356a8a60dc37e266?apiKey=0b50e676c0344a549b038dfc8be2dafd&"
                            className="aspect-[7.8] object-contain object-center w-[156px] fill-white overflow-hidden shrink-0 max-w-full"
                            aria-label="Logo"
                        />
                        <header
                            className="text-violet-300 text-center text-2xl font-light leading-8 tracking-tight"
                            aria-label="Login"
                        >
                            Войти
                        </header>
                    </div>
                    <header
                        className="text-violet-300 text-6xl leading-[61px] tracking-tighter mt-28 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10"
                        aria-label="Page subtitle"
                    >
                        Ваш персональный путь к успеху
                    </header>
                    <div className="mt-8 max-md:max-w-full">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <form className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
                                <div className="flex grow flex-col items-center max-md:max-w-full max-md:mt-10">
                                    <header
                                        className="text-white text-2xl font-light leading-9 tracking-tight self-stretch max-md:max-w-full"
                                        aria-label="Description"
                                    >
                                        Мы используем социальные сети, чтобы направить вас к успешной карьере и образованию. Раскройте потенциал с помощью Профикот.
                                    </header>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0f9fda3ccaecbbbdb2839afb651760fd8433ae7f7b2b12fef8f8bc631ade453c?apiKey=0b50e676c0344a549b038dfc8be2dafd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9fda3ccaecbbbdb2839afb651760fd8433ae7f7b2b12fef8f8bc631ade453c?apiKey=0b50e676c0344a549b038dfc8be2dafd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9fda3ccaecbbbdb2839afb651760fd8433ae7f7b2b12fef8f8bc631ade453c?apiKey=0b50e676c0344a549b038dfc8be2dafd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9fda3ccaecbbbdb2839afb651760fd8433ae7f7b2b12fef8f8bc631ade453c?apiKey=0b50e676c0344a549b038dfc8be2dafd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9fda3ccaecbbbdb2839afb651760fd8433ae7f7b2b12fef8f8bc631ade453c?apiKey=0b50e676c0344a549b038dfc8be2dafd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9fda3ccaecbbbdb2839afb651760fd8433ae7f7b2b12fef8f8bc631ade453c?apiKey=0b50e676c0344a549b038dfc8be2dafd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9fda3ccaecbbbdb2839afb651760fd8433ae7f7b2b12fef8f8bc631ade453c?apiKey=0b50e676c0344a549b038dfc8be2dafd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0f9fda3ccaecbbbdb2839afb651760fd8433ae7f7b2b12fef8f8bc631ade453c?apiKey=0b50e676c0344a549b038dfc8be2dafd&"className="aspect-[2.25] object-contain object-center w-full overflow-hidden self-stretch mt-14 max-md:max-w-full max-md:mt-10"
                                        aria-label="Image"
                                    />
                                    <button
                                        className="text-violet-300 text-center text-2xl leading-8 justify-center items-stretch border bg-slate-900 mt-12 px-10 py-5 rounded-[50px] border-solid border-zinc-200 border-opacity-10 max-md:mt-10 max-md:px-5"
                                        aria-label="Register"
                                    >
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </form>
                            <form className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
                                <div className="border bg-slate-900 bg-opacity-10 flex flex-col justify-center items-stretch w-full my-auto px-4 py-4 rounded-[50px] border-solid border-zinc-200 border-opacity-0 max-md:max-w-full max-md:mt-10">
                                    <div className="border bg-slate-900 bg-opacity-30 flex flex-col justify-center items-stretch p-6 rounded-[50px] border-solid border-zinc-200 border-opacity-0 max-md:max-w-full max-md:px-5">
                                        <div className="border bg-slate-900 flex flex-col justify-center px-16 py-12 rounded-[50px] border-solid border-zinc-200 border-opacity-10 items-start max-md:px-5">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/58fca9f8f0a5313731b40aee3afe0ccebbc9e4e095d68e69088fe8ebe44f6563?apiKey=0b50e676c0344a549b038dfc8be2dafd&"
                                                className="aspect-[0.96] object-contain object-center w-[193px] stroke-[1px] stroke-violet-300 overflow-hidden max-md:ml-1"
                                                aria-label="Image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Main;
