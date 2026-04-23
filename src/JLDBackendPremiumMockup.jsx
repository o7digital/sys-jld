const NAV_ITEMS = ['Dashboard', 'Productividad', 'Clientes', 'Producto', 'Catálogos', 'Administrativo']

const TOP_METRICS = [
  { label: 'Ventas del mes', value: '$1.84M', delta: '+12.4%' },
  { label: 'Ticket promedio', value: '$1,285', delta: '+4.1%' },
  { label: 'Citas completadas', value: '1,426', delta: '+8.8%' },
  { label: 'Satisfacción cliente', value: '92%', delta: '+2.3%' },
  { label: 'Recompra estimada', value: '78%', delta: '+5.6%' },
  { label: 'Consumo interno', value: '$86,420', delta: '-3.2%' },
]

const LUXURY_PILLARS = [
  ['Elegancia operativa', 'Una interfaz sobria, clara y mucho más alineada con la imagen de Jean Louis David.'],
  ['Control real', 'Dirección visualiza ventas, productividad, stock y clientes sin depender de terceros.'],
  ['Experiencia profesional', 'Menos fricción, mejor lectura y navegación más ejecutiva para sucursales y corporativo.'],
]

const MAIN_MODULES = [
  { title: 'Centro de Control Ejecutivo', subtitle: 'KPIs, alertas y visión global', icon: '◔' },
  { title: 'Productividad', subtitle: 'Sucursal, individual, acumulada y comparativa', icon: '◕' },
  { title: 'Clientes 360', subtitle: 'Historial, frecuencia, seguimiento', icon: '◎' },
  { title: 'Productos', subtitle: 'Inventario, consumo, compras y alertas', icon: '▣' },
  { title: 'Catálogos', subtitle: 'Servicios, proveedores, sucursales y tarifas', icon: '☰' },
  { title: 'Administrativo', subtitle: 'Permisos, bitácora, parámetros y auditoría', icon: '▤' },
]

const PRODUCTIVITY_ROWS = [
  ['Juan Resendiz', 'Color / Balayage', '89', '$84,560', '1h 24m'],
  ['Juana Gonzalez', 'Manicure / Spa', '61', '$37,892', '48m'],
  ['Madelein Colin', 'Tratamientos', '54', '$42,315', '55m'],
  ['Ana María Alvarado', 'Recepción / Ventas', '118', '$29,740', '12m'],
  ['Jimena Pérez', 'Peinado', '46', '$24,990', '39m'],
]

const CLIENT_ROWS = [
  ['Adriana Guerra de Balaguerra', '25-03-2026', 'Color + Tratamiento', 'VIP', 'Alta'],
  ['Andrea Certucha', '18-03-2026', 'Corte + Peinado', 'Frecuente', 'Media'],
  ['Magda Martínez', '09-03-2026', 'Color Majirel', 'Recuperar', 'Alta'],
  ['Sofía Levy', '28-02-2026', 'Corte dama', 'Nueva', 'Media'],
]

const INVENTORY_ROWS = [
  ['Acai Ionic Bonding Spray 100ml', '12', '6', 'Bajo', 'Solicitar'],
  ['Brazilian Dry Oil 100ml', '24', '8', 'OK', '—'],
  ['CBD Instant Conditioner', '4', '5', 'Crítico', 'Urgente'],
  ['Anti Frizz Shampoo 350ml', '18', '7', 'OK', '—'],
]

const AI_INSIGHTS = [
  'Hugging Face: detección de clientes con riesgo de no retorno basada en frecuencia y ticket.',
  'Predicción de demanda por servicio para planear agenda y stock por sucursal.',
  'Anomalías automáticas en consumo interno, descuentos y caídas de productividad.',
  'Resumen inteligente semanal para dirección con alertas accionables.',
]

const sectionCard =
  'rounded-[30px] border border-[#e8decf] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,246,240,0.96))] p-5 sm:p-6 shadow-[0_12px_34px_rgba(15,23,42,0.07)]'

const smallCard = 'rounded-3xl border border-[#ece2d3] bg-[#fffaf3] p-4'

const tableShell = 'overflow-x-auto rounded-[24px] border border-[#eadfce] bg-white/95'

export default function JLDBackendPremiumMockup() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8f3ec_0%,#f4f5f7_32%,#eef2f6_100%)] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-[#222] bg-black text-white shadow-[0_10px_34px_rgba(0,0,0,0.28)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/20 bg-white/5">
                <div className="absolute left-[6px] top-[6px] h-7 w-4 rounded-full bg-white" />
                <div className="absolute right-[6px] top-[6px] h-7 w-4 rounded-full bg-white" />
                <div className="absolute left-1/2 top-1 h-9 w-[3px] -translate-x-1/2 rotate-12 bg-black/60" />
              </div>
              <div>
                <p className="text-[17px] font-semibold tracking-wide text-white">Jean Louis David</p>
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#d6b98c]">Sistema Central JLD V3</p>
              </div>
            </div>

            <nav className="hidden items-center gap-2 pl-6 xl:flex">
              {NAV_ITEMS.map((item, idx) => (
                <button
                  key={item}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                    idx === 0
                      ? 'bg-gradient-to-r from-[#b9925e] to-[#ddc89f] text-black shadow-[0_8px_18px_rgba(185,146,94,0.3)]'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden rounded-xl border border-[#c7a56a]/30 bg-[#c7a56a]/10 px-4 py-2 text-sm text-slate-300 md:block">
              Sucursal: <span className="font-medium text-white">Jean Louis David Santa Fe</span>
            </div>
            <div className="h-10 w-10 rounded-full border border-white/20 bg-white/10" />
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-6 sm:px-6 sm:py-7">
        <section className="grid gap-6 xl:grid-cols-[1.28fr_0.72fr]">
          <div className={sectionCard}>
            <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9925e]">Visión general</p>
                <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-[#131313] sm:text-[34px]">
                  Sistema actual JLD, más claro, más ejecutivo y más sólido
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6a5a48]">
                  Mantiene la identidad negro + blanco del backend actual y la eleva con acentos nobles, superficies más refinadas y una
                  experiencia profesional pensada para una marca de salón de alto nivel.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-2xl bg-gradient-to-r from-[#b9925e] to-[#d9bf94] px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_22px_rgba(185,146,94,0.28)]">
                  Ver demo ejecutivo
                </button>
                <button className="rounded-2xl border border-[#dcc9ae] bg-white px-5 py-3 text-sm font-semibold text-[#5f4934] hover:bg-[#fffaf4]">
                  Exportar propuesta
                </button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {TOP_METRICS.map((metric) => (
                <div key={metric.label} className="rounded-[24px] border border-[#ece2d3] bg-white p-4 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
                  <p className="text-sm text-[#7a6a58]">{metric.label}</p>
                  <p className="mt-2 text-[30px] font-semibold leading-none tracking-tight text-slate-900">{metric.value}</p>
                  <p className="mt-3 inline-flex rounded-full bg-[#f6edde] px-3 py-1 text-xs font-semibold text-[#9b6b2f]">{metric.delta}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {LUXURY_PILLARS.map(([title, body]) => (
                <div key={title} className={smallCard}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9925e]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6b5b49]">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#1f1f1f] bg-[linear-gradient(180deg,#0a0a0a_0%,#111111_58%,#1a1a1a_100%)] p-6 text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d6b98c]">IA + análisis</p>
                <h2 className="mt-2 text-2xl font-semibold">Hugging Face · IA · Análisis de sentimiento</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  La V3 combina operación, imagen de marca y modelos de IA para análisis de sentimiento, lectura de riesgo y decisiones más
                  accionables para dirección.
                </p>
              </div>
              <div className="rounded-xl border border-[#d6b98c]/25 bg-[#d6b98c]/10 px-3 py-2 text-xs font-semibold text-[#ead6b4]">V3</div>
            </div>

            <div className="mt-5 space-y-3">
              {AI_INSIGHTS.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {MAIN_MODULES.map((module) => (
            <div
              key={module.title}
              className="group rounded-[28px] border border-[#e7dccd] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,247,242,0.96))] p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(15,23,42,0.1)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9925e]">Módulo</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">{module.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{module.subtitle}</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4e4] text-2xl text-[#b9925e]">{module.icon}</div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-400">Entrar al módulo</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 group-hover:bg-[#111111] group-hover:text-[#f0dcc0]">
                  Abrir
                </span>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className={sectionCard}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9925e]">V3</p>
                <h2 className="mt-2 text-2xl font-semibold">Salon intelligence pour direction</h2>
              </div>
              <p className="rounded-2xl bg-[#fbf4ea] px-4 py-2 text-sm text-[#7b6854]">Comparativo Santa Fe · Polanco</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                ['Sucursal líder', 'Santa Fe', 'Mayor productividad y ticket promedio del mes.'],
                ['Servicio estrella', 'Balayage', 'Mayor margen y alta recurrencia.'],
                ['Riesgo detectado', 'Recepción Polanco', 'Caída en conversión de citas.'],
                ['Acción sugerida', 'Promoción VIP', 'Recuperar clientas con alto histórico.'],
              ].map(([kpi, value, body]) => (
                <div key={kpi} className={smallCard}>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">{kpi}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={sectionCard}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9925e]">Flujo inteligente</p>
            <h2 className="mt-2 text-2xl font-semibold">De operación diaria a decisiones reales</h2>

            <div className="mt-5 space-y-4">
              {[
                ['1. Captura operativa', 'Ventas, servicios, clientes, inventario y consumo interno.'],
                ['2. Lectura inteligente', 'Hugging Face identifica patrones, riesgos y oportunidades.'],
                ['3. Alertas accionables', 'El sistema propone foco comercial, stock y seguimiento.'],
                ['4. Reporte dirección', 'Resumen ejecutivo para dueña, gerencia y supervisión.'],
              ].map(([step, body]) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-[#eadfce] bg-[#fffaf4] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#b9925e] to-[#d9bf94] text-sm font-bold text-black">
                    {step.split('.')[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{step}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className={sectionCard}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9925e]">Productividad individual concentrada</p>
                <h2 className="mt-2 text-2xl font-semibold">Vista más limpia que el sistema actual</h2>
              </div>
              <p className="rounded-2xl border border-[#dbc6a9] px-4 py-2 text-sm text-[#7b6854]">Mar 2026</p>
            </div>

            <div className={tableShell}>
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[#fbf4ea] text-[#7b6854]">
                  <tr>
                    {['Colaborador', 'Top servicio', 'Cantidad', 'Importe', 'Tiempo prom.'].map((head) => (
                      <th key={head} className="px-4 py-3 font-semibold">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTIVITY_ROWS.map((row, index) => (
                    <tr key={row[0]} className={index % 2 === 0 ? 'bg-white' : 'bg-[#fcf8f2]'}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${cell}-${cellIndex}`} className={`px-4 py-3 ${cellIndex === 0 ? 'font-semibold text-slate-800' : 'text-slate-600'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={sectionCard}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9925e]">Alertas rápidas</p>
            <h2 className="mt-2 text-2xl font-semibold">Lo importante, sin perderse en pantallas viejas</h2>

            <div className="mt-5 space-y-4">
              {[
                ['Consumo interno elevado', 'Sucursal Santa Fe supera 18% el promedio semanal.'],
                ['Producto crítico', 'CBD Instant Conditioner queda por debajo de stock mínimo.'],
                ['Cliente VIP inactiva', 'Magda Martínez no regresa desde hace 21 días.'],
                ['Baja productividad', 'Recepción Polanco muestra caída de conversión vs semana previa.'],
              ].map(([title, body], idx) => (
                <div key={title} className={`rounded-2xl border p-4 ${idx === 0 ? 'border-[#d9bf94] bg-[#fff4e4]' : 'border-[#eadfce] bg-[#fffaf4]'}`}>
                  <p className="font-semibold text-slate-800">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className={sectionCard}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9925e]">Clientes</p>
                <h2 className="mt-2 text-2xl font-semibold">CRM de salón realmente útil</h2>
              </div>
              <button className="rounded-2xl border border-[#dbc6a9] px-4 py-2 text-sm font-medium text-[#5b4632] hover:bg-[#fffaf4]">
                Ver historial completo
              </button>
            </div>

            <div className={tableShell}>
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[#fbf4ea] text-[#7b6854]">
                  <tr>
                    {['Cliente', 'Última visita', 'Último servicio', 'Segmento', 'Prioridad'].map((head) => (
                      <th key={head} className="px-4 py-3 font-semibold">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CLIENT_ROWS.map((row, index) => (
                    <tr key={row[0]} className={index % 2 === 0 ? 'bg-white' : 'bg-[#fcf8f2]'}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${cell}-${cellIndex}`} className={`px-4 py-3 ${cellIndex === 0 ? 'font-semibold text-slate-800' : 'text-slate-600'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={sectionCard}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9925e]">Inventario</p>
                <h2 className="mt-2 text-2xl font-semibold">Producto, compras y stock sin fricción</h2>
              </div>
              <button className="rounded-2xl border border-[#dbc6a9] px-4 py-2 text-sm font-medium text-[#5b4632] hover:bg-[#fffaf4]">
                Abrir catálogo
              </button>
            </div>

            <div className={tableShell}>
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[#fbf4ea] text-[#7b6854]">
                  <tr>
                    {['Producto', 'Existencias', 'Mínimo', 'Estado', 'Acción'].map((head) => (
                      <th key={head} className="px-4 py-3 font-semibold">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {INVENTORY_ROWS.map((row, index) => (
                    <tr key={row[0]} className={index % 2 === 0 ? 'bg-white' : 'bg-[#fcf8f2]'}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${cell}-${cellIndex}`} className={`px-4 py-3 ${cellIndex === 0 ? 'font-semibold text-slate-800' : 'text-slate-600'}`}>
                          {cellIndex === 3 ? (
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                cell === 'Crítico'
                                  ? 'bg-[#f8e6df] text-[#a35a37]'
                                  : cell === 'Bajo'
                                    ? 'bg-[#fff0db] text-[#9a6a2d]'
                                    : 'bg-[#edf5ea] text-[#5f7f56]'
                              }`}
                            >
                              {cell}
                            </span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={sectionCard}>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9925e]">Arquitectura propuesta</p>
              <h2 className="mt-2 text-2xl font-semibold">Sistema propio, no rentado y mucho menos limitado</h2>
            </div>
            <p className="rounded-2xl border border-[#eadfce] bg-[#fffaf4] px-4 py-3 text-sm text-[#6b5b49]">
              Astro + React front · Supabase backend · Hugging Face IA · Multi-sucursal · Reportes exportables
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['Multi-sucursal', 'Santa Fe, Polanco, bodega y futuras aperturas.'],
              ['Permisos por rol', 'Dirección, gerente, recepción, estilista, compras.'],
              ['Bitácora completa', 'Cambios, movimientos, descuentos, ajustes.'],
              ['Dashboards modernos', 'Mucho más claros que las tablas remotas del sistema actual.'],
            ].map(([title, body]) => (
              <div key={title} className={smallCard}>
                <p className="font-semibold text-slate-800">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
