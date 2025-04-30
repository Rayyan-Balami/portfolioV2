// components/footer.tsx
export default function Footer() {
  return (
    <footer
      className="px-6 md:px-16 py-16 mt-24 border-t border-gray-200 fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Rayyan Balami. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">Made using 🫡 Pure React, Tailwind </p>
      </div>
    </footer>
  );
}
