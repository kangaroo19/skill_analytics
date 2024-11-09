export default function PageHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <h1 className="font-spoqa-bold text-4xl pt-10">{children}</h1>;
}
