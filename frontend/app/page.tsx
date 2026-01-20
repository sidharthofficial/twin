import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Welcome! Siddharth's AI Digital Twin
          </h1>
         
          <div className="h-[600px]">
            <Twin />
          </div>

          <footer className="mt-8 text-center text-sm text-gray-500">
            <p>Please type in your queries about me!🤩</p>
          </footer>
        </div>
      </div>
    </main>
  );
}