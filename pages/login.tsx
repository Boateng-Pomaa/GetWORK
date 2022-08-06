import Button from '@nextui-org/react/button';

export default function Login() {
  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>
      <div>
        <label htmlFor="email">Password</label>
        <input type="text" id="email" />
      </div>
      <Button>Click me</Button>
    </div>
  );
}
