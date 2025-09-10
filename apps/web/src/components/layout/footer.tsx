import { Mail, Phone } from "lucide-react";

const footerLinks = {
  support: [
    { name: "Central de Ajuda", href: "#" },
    { name: "Suporte Técnico", href: "#" },
    { name: "Chat Online", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  services: [
    { name: "Recuperar Senha", href: "/recuperar-senha" },
    { name: "Consultar Extratos", href: "/extrato" },
    { name: "Quitar Débitos", href: "/debitos" },
    { name: "Resgatar Benefícios", href: "/beneficios" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Contato</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>atendimento@portal.com</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Horários:</strong>
                <br />
                Seg-Sex: 8h às 20h
                <br />
                Sáb-Dom: 8h às 14h
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Atendimento</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Portal do Cliente. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
