export function TreeTable() {

  const accounts = [
    {
      id: 1,
      name: "Receita Bruta",
      value: 500000,
      children: [
        { id: 11, name: "Vendas de Produtos", value: 400000 },
        { id: 12, name: "Serviços Prestados", value: 100000 },
      ],
    },
    {
      id: 2,
      name: "(-) Deduções e Impostos",
      value: -50000,
      children: [
        { id: 21, name: "Impostos sobre Vendas", value: -30000 },
        { id: 22, name: "Devoluções e Abatimentos", value: -20000 },
      ],
    },
    {
      id: 3,
      name: "= Receita Líquida",
      value: 450000,
      children: [],
    },
    {
      id: 4,
      name: "(-) Custo dos Produtos Vendidos (CPV)",
      value: -200000,
      children: [
        { id: 41, name: "Matéria-Prima", value: -120000 },
        { id: 42, name: "Mão de Obra Direta", value: -80000 },
      ],
    },
    {
      id: 5,
      name: "= Lucro Bruto",
      value: 250000,
      children: [],
    },
    {
      id: 6,
      name: "(-) Despesas Operacionais",
      value: -100000,
      children: [
        { id: 61, name: "Despesas Administrativas", value: -50000 },
        { id: 62, name: "Despesas Comerciais", value: -30000 },
        { id: 63, name: "Despesas Gerais", value: -20000 },
      ],
    },
    {
      id: 7,
      name: "= Lucro Operacional",
      value: 150000,
      children: [],
    },
    {
      id: 8,
      name: "(+) Resultado Financeiro",
      value: 20000,
      children: [
        { id: 81, name: "Receitas Financeiras", value: 30000 },
        { id: 82, name: "Despesas Financeiras", value: -10000 },
      ],
    },
    {
      id: 9,
      name: "= Lucro Antes dos Impostos",
      value: 170000,
      children: [],
    },
    {
      id: 10,
      name: "(-) Impostos sobre o Lucro",
      value: -40000,
      children: [],
    },
    {
      id: 11,
      name: "= Lucro Líquido",
      value: 130000,
      children: [],
    },
  ];

  return (
    <>
      <div>
        {/* table aqui */}
      </div>
    </>
  )
}
