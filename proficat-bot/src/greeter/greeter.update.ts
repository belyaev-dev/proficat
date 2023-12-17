import { Ctx, Start, Update } from "nestjs-telegraf";
import { Context } from "../interfaces/context.interface";
import { WIZARD_SCENE_ID } from "../app.constants";

@Update()
export class GreeterUpdate {
  @Start()
  async onStart(@Ctx() ctx: Context): Promise<void> {
    await ctx.scene.enter(WIZARD_SCENE_ID);
  }

  // @Hears(["hi", "hello", "hey", "qq"])
  // onGreetings(
  //   @UpdateType() updateType: TelegrafUpdateType,
  //   @Sender("first_name") firstName: string,
  // ): string {
  //   return `Hey ${firstName}`;
  // }

  // @Command("scene")
  // async onSceneCommand(@Ctx() ctx: Context): Promise<void> {
  //   await ctx.scene.enter(HELLO_SCENE_ID);
  // }
  //
  // @Command("wizard")
  // async onWizardCommand(@Ctx() ctx: Context): Promise<void> {
  //   await ctx.scene.enter(WIZARD_SCENE_ID);
  // }
}
