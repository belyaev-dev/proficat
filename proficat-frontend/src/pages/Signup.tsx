import {FunctionComponent} from "../common/types.ts";

const Signup = (): FunctionComponent => {
    return (
        <div className="bg-gray-950 flex flex-col justify-center items-stretch">
            <div className="flex w-full flex-col items-center pt-7 pb-12 px-16 max-md:max-w-full max-md:px-5">
                <div className="flex w-[1257px] max-w-full flex-col items-stretch mb-32 max-md:mb-10">
                    <div className="flex w-full justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                        <div className="flex gap-4 items-start">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6fd40f743c77eaa579aa98b1ed35a765548cbd6e918e4ce48eacf2541be4905?apiKey=0b50e676c0344a549b038dfc8be2dafd&"
                                className="aspect-[1.36] object-contain object-center w-[15px] fill-stone-200 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-white text-2xl font-light leading-8 tracking-tight">
                                О проекте
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5e1c04a9de4116db12d54dd8e6e1ee7b490aa97f53520a4e404307f1a1af963?apiKey=0b50e676c0344a549b038dfc8be2dafd&"
                            className="aspect-[7.8] object-contain object-center w-[156px] fill-white overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-violet-300 text-center text-2xl font-light leading-8 tracking-tight">
                            Войти
                        </div>
                    </div>
                    <div className="self-center flex w-[858px] max-w-full flex-col mt-28 max-md:mt-10">
                        <div className="text-violet-300 text-center text-6xl leading-[60.8px] tracking-tighter self-center whitespace-nowrap max-md:text-4xl">
                            Регистрация
                        </div>
                        <div className="flex w-[543px] max-w-full justify-between gap-5 ml-5 mt-20 self-start items-start max-md:flex-wrap max-md:mt-10">
                            <div className="text-white text-2xl font-light leading-8 tracking-tight">
                                Имя
                            </div>
                            <div className="text-white text-2xl font-light leading-8 tracking-tight">
                                Фамилия
                            </div>
                        </div>
                        <div className="self-stretch flex items-stretch justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                            <div className="text-white text-opacity-50 text-2xl font-light leading-8 tracking-tight whitespace-nowrap border bg-slate-900 grow justify-center pl-8 pr-16 py-7 rounded-3xl border-solid border-zinc-200 border-opacity-10 items-start max-md:px-5">
                                Ваше имя
                            </div>
                            <div className="text-white text-opacity-50 text-2xl font-light leading-8 tracking-tight whitespace-nowrap border bg-slate-900 grow justify-center pl-8 pr-16 py-7 rounded-3xl border-solid border-zinc-200 border-opacity-10 items-start max-md:px-5">
                                Ваше имя
                            </div>
                        </div>
                        <div className="flex w-[523px] max-w-full items-stretch justify-between gap-5 ml-5 mt-7 self-start max-md:flex-wrap">
                            <div className="text-white text-opacity-50 text-2xl font-light leading-8 tracking-tight w-[242px]">
                                Электронная почта
                            </div>
                            <div className="text-white text-2xl font-light leading-8 tracking-tight">
                                Пароль
                            </div>
                        </div>
                        <div className="self-stretch flex items-stretch justify-between gap-5 mt-3.5 max-md:max-w-full max-md:flex-wrap">
                            <div className="text-white text-2xl font-light leading-8 tracking-tight whitespace-nowrap border bg-slate-900 grow justify-center pl-8 pr-16 py-6 rounded-3xl border-solid border-zinc-200 border-opacity-10 items-start max-md:px-5">
                                robocats@lct.mos
                            </div>
                            <div className="text-white text-opacity-50 text-2xl font-light leading-8 tracking-tight whitespace-nowrap border bg-slate-900 grow justify-center pl-8 pr-16 py-6 rounded-3xl border-solid border-zinc-200 border-opacity-10 items-start max-md:px-5">
                                Минимум 8 символов
                            </div>
                        </div>
                        <div className="text-white text-opacity-50 text-2xl font-light leading-8 tracking-tight self-center whitespace-nowrap mt-12 max-md:mt-10">
                            Вход через соцсети
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c8e6c99e4d6e67608a73eeb7da8a8d1fe543ee8936d59b7602b9daeb12fc2cf?apiKey=0b50e676c0344a549b038dfc8be2dafd&"
                            className="aspect-[4.43] object-contain object-center w-[310px] overflow-hidden self-center max-w-full mt-3.5"
                        />
                        <div className="text-violet-300 text-center text-2xl leading-8 whitespace-nowrap justify-center items-stretch border bg-slate-900 self-center mt-12 px-10 py-5 rounded-[50px] border-solid border-zinc-200 border-opacity-10 max-md:mt-10 max-md:px-5">
                            Войти
                        </div>
                        <div className="text-violet-300 text-center text-2xl font-light leading-8 tracking-tight self-center whitespace-nowrap mt-6">
                            <span className="text-white">Уже есть аккаунт? </span>
                            <span className="text-violet-300">Нажмите здесь</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;


