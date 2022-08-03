/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-classes-per-file */
import 'reflect-metadata';

const inject = (): ClassDecorator => (target) => {};
type Constructor<T> = new (...args: any[]) => T;

class Engine {
  name = 'V8';
}

class Tire {
  name = '21';
}

@inject()
class Car {
  constructor(private engine: Engine, private tire: Tire) {}

  engineName() {
    return this.engine.name;
  }

  tireName() {
    return this.tire.name;
  }
}

const Factory = <T>(Target: Constructor<T>) => {
  const providers = Reflect.getMetadata('design:paramtypes', Target) || [];
  const instances = providers.map((Provider: Constructor<T>) => {
    return new Provider();
  });
  return new Target(...instances);
};

const getCarWithNew = () => new Car(new Engine(), new Tire());

const getCarWithInject = () => Factory(Car);

// eslint-disable-next-line import/prefer-default-export
export { getCarWithInject, getCarWithNew };
