import {FunctionComponent} from "../common/types.ts";

const Login = (): FunctionComponent => {
    return (
        <section className="bg-gray-950 flex flex-col justify-center items-stretch">
            <header className="flex w-full flex-col items-center pt-7 pb-12 px-16 max-md:max-w-full max-md:px-5">
                <div className="flex w-[1257px] max-w-full items-stretch justify-between gap-5 mb-32 max-md:flex-wrap max-md:justify-center max-md:mb-10">
                    <div className="flex gap-4 self-start items-start">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6fd40f743c77eaa579aa98b1ed35a765548cbd6e918e4ce48eacf2541be4905?apiKey=0b50e676c0344a549b038dfc8be2dafd&"
                            className="aspect-[1.36] object-contain object-center w-[15px] fill-stone-200 overflow-hidden shrink-0 max-w-full"
                            alt="logo"
                        />
                        <div className="text-white text-2xl font-light leading-8 tracking-tight">
                            О проекте
                        </div>
                    </div>
                    <div className="flex flex-col max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/04e857655c3f685a0208514166205c70e2b37e89b1a42b08d4e1ebb257be9f2f?apiKey=0b50e676c0344a549b038dfc8be2dafd&"
                            className="aspect-[7.8] object-contain object-center w-[156px] fill-white overflow-hidden self-center max-w-full"
                            alt="image"
                        />
                        <div className="text-violet-300 text-center text-6xl leading-[61px] tracking-tighter self-stretch mt-28 max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
                            Вход в аккаунт
                        </div>
                        <div className="text-white text-opacity-50 text-2xl font-light leading-8 tracking-tight self-stretch mt-20 max-md:max-w-full max-md:mt-10">
                            Электронная почта
                        </div>
                        <div className="text-white text-2xl font-light leading-8 tracking-tight whitespace-nowrap border bg-slate-900 self-stretch justify-center mt-3.5 pl-8 pr-16 py-6 rounded-3xl border-solid border-zinc-200 border-opacity-10 items-start max-md:max-w-full max-md:px-5">
                            <label htmlFor="email">prosto@robocats.ru</label>
                            {/*<input*/}
                            {/*    type="email"*/}
                            {/*    id="email"*/}
                            {/*    name="email"*/}
                            {/*    aria-label="Email"*/}
                            {/*    role="textbox"*/}
                            {/*/>*/}
                        </div>
                        <div className="text-white text-opacity-50 text-2xl font-light leading-8 tracking-tight self-stretch mt-7 max-md:max-w-full">
                            Пароль
                        </div>
                        <div className="text-white text-2xl font-light leading-8 tracking-tight whitespace-nowrap border bg-slate-900 self-stretch justify-center mt-3.5 pl-8 pr-16 py-8 rounded-3xl border-solid border-zinc-200 border-opacity-10 items-start max-md:max-w-full max-md:px-5">
                            <label htmlFor="password">************</label>
                            {/*<input*/}
                            {/*    type="password"*/}
                            {/*    id="password"*/}
                            {/*    name="password"*/}
                            {/*    aria-label="Password"*/}
                            {/*    role="textbox"*/}
                            {/*/>*/}
                        </div>
                        <div className="self-stretch flex flex-col items-stretch mt-12 px-14 max-md:max-w-full max-md:mt-10 max-md:px-5">
                            <div className="text-white text-opacity-50 text-2xl font-light leading-8 tracking-tight max-w-[333px]">
                                Вход через соцсети
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a488147091d8fdd90b21258d6794381ca43fc316005a778c523362531513bb1?apiKey=0b50e676c0344a549b038dfc8be2dafd&"
                                className="aspect-[4.43] object-contain object-center w-[310px] overflow-hidden self-center mt-3.5"
                                alt="social-media"
                            />
                            <button className="text-gray-950 text-center text-2xl leading-8 whitespace-nowrap justify-center items-stretch bg-violet-300 self-center mt-12 px-10 py-5 rounded-[50px] max-md:mt-10 max-md:px-5">
                                Войти
                            </button>
                        </div>
                        <div className="text-violet-300 text-center text-2xl font-light leading-9 tracking-tight self-stretch mt-6 max-md:max-w-full">
                            <span className="text-white">Новый пользователь? </span>
                            <a href="#" className="text-violet-300">
                                Нажмите здесь
                            </a>
                        </div>
                    </div>
                    <div className="text-violet-300 text-center text-2xl font-light leading-8 tracking-tight self-start">
                        Войти
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Login;
