export default function NotFound() {
    return (
      <div className="h-screen flex items-center justify-center text-xl text-gray-700">
        Page not found.
      </div>
    );
  }
  
  export const dynamic = "force-dynamic"; // <-- optional but safe  