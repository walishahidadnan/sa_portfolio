interface GreetingProps {
    name: string
  }
  
  export function Greeting({ name = "World" }: GreetingProps) {
    return (
      <div className="p-4 bg-blue-100 rounded-lg">
        <h1 className="text-2xl font-bold text-blue-800">Hello, {name}!</h1>
        <p className="mt-2 text-blue-600">Welcome to the file-based interface example.</p>
      </div>
    )
  }
  