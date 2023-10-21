export const ApplicationStage = {
  local: 'local', // ローカル環境
  prod: 'prod', // 本番環境
} as const;

export type ApplicationStageType = typeof ApplicationStage[keyof typeof ApplicationStage];

export class BaseEnv {
  public static get isLocal(): boolean {
    return this.stage === ApplicationStage.local;
  }

  public static get isProd(): boolean {
    return this.stage === ApplicationStage.prod;
  }

  public static get stage(): ApplicationStageType {
    const STAGE = process.env.NEXT_PUBLIC_STAGE;

    if (STAGE === undefined) {
      throw new Error(`process.env.NEXT_PUBLIC_STAGE undefined`);
    } else if (!Object.values(ApplicationStage).some((value) => STAGE === value)) {
      throw new Error(`process.env.NEXT_PUBLIC_STAGE is invalid. Set to local, or prod.`);
    }
    return STAGE as ApplicationStageType;
  }
}
