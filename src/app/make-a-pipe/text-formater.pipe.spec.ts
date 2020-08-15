import { TextFormaterPipe } from './text-formater.pipe';

describe('TextFormaterPipe', () => {
  it('create an instance', () => {
    const pipe = new TextFormaterPipe();
    expect(pipe).toBeTruthy();
  });
});
