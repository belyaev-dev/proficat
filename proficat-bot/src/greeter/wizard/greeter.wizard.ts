import { Ctx, Wizard, WizardStep, Message, On } from "nestjs-telegraf";
import { WIZARD_SCENE_ID } from "../../app.constants";
import { WizardContext } from "telegraf/typings/scenes";

@Wizard(WIZARD_SCENE_ID)
export class GreeterWizard {
  @WizardStep(1)
  async welcome(@Ctx() ctx: WizardContext): Promise<void> {
    ctx.reply(
      "Добро пожаловать в Профикот! \n\n" +
        "Профикот - ваш персональный путь к успеху. " +
        "Мы используем социальные сети, чтобы направить вас к успешной карьере и образованию. " +
        "Раскройте потенциал с помощью Профикот.\n\n" +
        "Выберите социальную сеть для входа:",
      {
        reply_markup: {
          keyboard: [[{ text: "ВКонтакте" }, { text: "Одноклассники" }]],
          one_time_keyboard: true,
        },
      },
    );
    await ctx.wizard.next();
  }

  @On("text")
  @WizardStep(2)
  async processAccess(
    @Ctx() ctx: WizardContext,
    @Message() msg: { text: string },
  ): Promise<void> {
    ctx.reply(
      `Вы выбрали:  ${msg.text}.\n\n` +
        "Нажмите на кнопку, чтобы выдать доступ для Профикот:",
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Дать доступ",
                url: "https://id.vk.com/auth?return_auth_hash=02293c90794210968a&redirect_uri=https%3A%2F%2Fproficat.ru&redirect_uri_hash=73dcebe849f7568e7e&force_hash=&app_id=51816906&response_type=code&code_challenge=&code_challenge_method=&scope=0&state=",
              },
            ],
          ],
        },
      },
    );

    // Introduce a delay of 1 minute before sending the next message
    setTimeout(async () => {
      ctx.reply(
        "Спасибо!\n\n" +
          "Подождите пару минут - наши интеллектуальные алгоритмы проводят анализ и создают план вашего профессионального развития.",
      );

      setTimeout(async () => {
        ctx.reply(
          "Профикот подготовил для вас персональный отчет.\n\n" +
            "Ваши интересы:\n" +
            "👨‍🔬 История\n" +
            "🔧 Ремонт\n" +
            "🏛️ Архитектура\n" +
            "🏗️ Проектирование\n\n" +
            "Рекомендованный образовательный путь:\n" +
            "- Среднее общее образование (11 классов)\n" +
            "- МАРХИ, Дизайн архитектурной среды\n" +
            "- 07.03.03 Бакалавриат, 5 лет учёбы\n" +
            "- Трудоустройство\n\n" +
            "Рекомендованные профессии:\n" +
            "- Реставратор\n" +
            "- Маркшейдер\n" +
            "- Слесарь по ремонту строительных машин\n" +
            "- Монтажник санитарно-технических систем и оборудования\n\n" +
            "Используйте кнопки ниже, чтобы продолжить путь в Профикот:",
          {
            reply_markup: {
              keyboard: [
                [{ text: "Узнать подробнее о профессиях" }],
                [{ text: "Запись на консультации" }],
                [{ text: "Назад" }],
              ],
              one_time_keyboard: true,
            },
          },
        );
        await ctx.wizard.next();
      }, 30000);
    }, 30000); // 1-minute delay after the user clicks the link
  }

  @On("text")
  @WizardStep(3)
  async proffDescription(
    @Ctx() ctx: WizardContext,
    @Message() msg: { text: string },
  ): Promise<void> {
    if (msg.text === "Узнать подробнее о профессиях") {
      ctx.reply("Выберите, о какой профессии хотите узнать подробнее:", {
        reply_markup: {
          keyboard: [
            [{ text: "Реставратор" }],
            [{ text: "Маркшейдер" }],
            [{ text: "Слесарь по ремонту" }],
            [{ text: "Монтажник санитарно-технических систем" }],
          ],
          one_time_keyboard: true,
        },
      });
    }
    await ctx.wizard.next();
  }

  @On("text")
  @WizardStep(4)
  async finalStep(
    @Ctx() ctx: WizardContext,
    @Message() msg: { text: string },
  ): Promise<void> {
    switch (msg.text) {
      case "Реставратор":
        ctx.reply(
          "Реставратор\n" +
            "Восстанавливает старинные здания, сооружения и предметы искусства: мебель, картины, скульптуры и фрески.\n" +
            "🔍 Изучает и анализирует старинные произведения искусства, их историю и особенности.\n" +
            "👨‍🔬 Советуется с историками, химиками и другими экспертами, чтобы выбрать лучшие материалы и методы работы.\n" +
            "🔨 Восстанавливает и ремонтирует древние каменные стены, деревянные элементы и уникальные детали зданий.\n" +
            "🎨 Воспроизводит и восстанавливает оригинальные цвета, узоры и орнаменты и воссоздает первоначальный вид.\n\n" +
            "Как работает реставратор:\n" +
            "Допустим, в городе есть старинное здание. Реставратору поручают восстановить его первоначальный вид. Сначала специалист изучит историю здания и соберет все доступные сведения о его архитектуре. Затем он начнет реставрацию, используя специальные инструменты и материалы. Если какая-то часть здания повреждена или испорчена временем, реставратор займется ее восстановлением с учетом исторической точности. Он также будет внимательно работать над деталями, чтобы сохранить уникальные элементы здания. В результате старинное здание будет выглядеть так, как будто оно только построено.\n\n" +
            "Специальности:\n" +
            "- 07.02.01 - Архитектура\n" +
            "- 54.02.04 - Реставрация\n" +
            "- 54.01.17 - Реставратор строительный\n" +
            "- 54.01.19 - Реставратор памятников каменного и деревянного зодчества\n" +
            "- 07.03.01 - Архитектура\n" +
            "- 07.03.02 - Реконструкция и реставрация архитектурного наследия\n" +
            "- 54.03.04 - Реставрация\n" +
            "- 54.05.02 - Живопись\n\n" +
            "Ну что, нравится профессия?\n" +
            "Оцени работу, чтобы мы смогли изменить и проанализировать другие варианты для тебя.",
          {
            reply_markup: {
              keyboard: [[{ text: "👍🏻" }], [{ text: "👎🏻" }]],
              one_time_keyboard: true,
            },
          },
        );
        break;
      // Add cases for other professions as needed
    }
    await ctx.wizard.next();
  }
}
