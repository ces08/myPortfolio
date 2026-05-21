export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-10 pt-5 text-sm text-gray-400 border-t border-gray-back mt-5">
      <div>Christine Song ©2026</div>
      <div className="flex gap-6">
        <a href="https://github.com/ces08" target="_blank" rel="noreferrer" className="hover:text-accent transition">GitHub</a>
        <a href="https://linkedin.com/in/cesong" target="_blank" rel="noreferrer" className="hover:text-accent transition">LinkedIn</a>
        <a href="mailto:christinesong08@gmail.com" className="hover:text-accent transition">Email</a>
      </div>
    </footer>
  )
}