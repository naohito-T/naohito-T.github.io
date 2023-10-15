import type { ApplicationStageType} from '@/configs';
import { BaseEnv } from '@/configs';

type EnvOptions<T> = {
  [key in ApplicationStageType]?: T;
} & {
  default?: T;
};

export const EnvVar = <T>(options: EnvOptions<T>): PropertyDecorator => {
  const STAGE = BaseEnv.stage;

  return (target: object, propertyKey: string | symbol) => {
    Object.defineProperty(target, propertyKey, {
      get: () => {
        /**
         * @desc != undefinedとnull同時チェックシンタックス
         * @see https://typescript-jp.gitbook.io/deep-dive/recap/null-undefined
         */
        if (options[STAGE] != null) return options[STAGE];
        if (options.default != null) return options.default;

        if (typeof propertyKey === 'string' && process.env[propertyKey] != null)
          return process.env[propertyKey.toUpperCase()];
        throw new Error(
          `environment variable ${propertyKey.toString()} is not defined in ${STAGE} stage`,
        );
      },
    });
  };
};
