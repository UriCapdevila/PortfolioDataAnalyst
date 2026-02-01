export default function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Portfolio Profesional de Uriel Capdevila. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
