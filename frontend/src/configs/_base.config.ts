export abstract class BaseConfig {
  public static readonly RUN_ENV = process.env.NODE_ENV ?? 'development';
}
