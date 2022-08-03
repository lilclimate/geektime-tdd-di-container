import { getCarWithInject, getCarWithNew } from './di';

describe('di', () => {
  it('create instance with new ', () => {
    const car = getCarWithNew();
    expect(car.engineName()).toBe('V8');
    expect(car.tireName()).toBe('21');
  });

  it('create instance with inject', () => {
    const car = getCarWithInject();
    expect(car.engineName()).toBe('V8');
    expect(car.tireName()).toBe('21');
  });
});
