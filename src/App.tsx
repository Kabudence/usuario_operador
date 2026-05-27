import { useState } from "react";
import type {
  Dispatch,
  ReactElement,
  SetStateAction,
  SVGProps,
} from "react";
import "./App.css";

type Mode = "selector" | "mobile" | "web";

type Screen =
    | "home"
    | "source"
    | "alerts"
    | "alertDetail"
    | "incidents"
    | "newIncident"
    | "incidentDetail"
    | "checks"
    | "newCheck"
    | "events"
    | "sync"
    | "more";

type ParentNav = "home" | "alerts" | "incidents" | "checks" | "more";

type IconName =
    | "operator"
    | "mobile"
    | "desktop"
    | "menu"
    | "bell"
    | "back"
    | "filter"
    | "plus"
    | "home"
    | "alert"
    | "incident"
    | "checks"
    | "events"
    | "sync"
    | "more"
    | "source"
    | "solar"
    | "grid"
    | "generator"
    | "battery"
    | "bolt"
    | "wave"
    | "check"
    | "info"
    | "warning"
    | "calendar"
    | "chevron"
    | "ellipsis"
    | "cloud"
    | "wifi";

const ENERGY = 78;

function App(): ReactElement {
  const [mode, setMode] = useState<Mode>("selector");
  const [screen, setScreen] = useState<Screen>("home");

  const openMode = (nextMode: Exclude<Mode, "selector">): void => {
    setScreen("home");
    setMode(nextMode);
  };

  if (mode === "selector") {
    return <ModeSelector onSelect={openMode} />;
  }

  if (mode === "mobile") {
    return (
        <OperatorMobile
            screen={screen}
            setScreen={setScreen}
            setMode={setMode}
        />
    );
  }

  return (
      <OperatorWeb screen={screen} setScreen={setScreen} setMode={setMode} />
  );
}

interface IconProps {
  name: IconName;
  size?: number;
}

function Icon({ name, size = 24 }: IconProps): ReactElement {
  const common: SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons: Record<IconName, ReactElement> = {
    operator: (
        <svg {...common}>
          <path d="M7 8a5 5 0 0 1 10 0" />
          <path d="M5 8h14" />
          <circle cx="12" cy="10" r="4" />
          <path d="M4 22a8 8 0 0 1 16 0" />
        </svg>
    ),
    mobile: (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
    ),
    desktop: (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 16v5" />
        </svg>
    ),
    menu: (
        <svg {...common}>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
    ),
    bell: (
        <svg {...common}>
          <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M13.7 21a2 2 0 0 1-3.4 0" />
        </svg>
    ),
    back: (
        <svg {...common}>
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
    ),
    filter: (
        <svg {...common}>
          <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z" />
          <path d="M17 19h4" />
          <path d="M19 17v4" />
        </svg>
    ),
    plus: (
        <svg {...common}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
    ),
    home: (
        <svg {...common}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-6h6v6" />
        </svg>
    ),
    alert: (
        <svg {...common}>
          <path d="M12 3l10 18H2L12 3z" />
          <path d="M12 9v5" />
          <path d="M12 17h.01" />
        </svg>
    ),
    incident: (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 7h6" />
          <path d="M9 11h6" />
          <path d="M9 15h4" />
        </svg>
    ),
    checks: (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8l1.5 1.5L15 5" />
          <path d="M9 14h6" />
          <path d="M9 18h6" />
        </svg>
    ),
    events: (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4" />
          <path d="M16 3v4" />
          <path d="M4 11h16" />
        </svg>
    ),
    sync: (
        <svg {...common}>
          <path d="M21 12a9 9 0 0 1-15.4 6.4" />
          <path d="M3 12A9 9 0 0 1 18.4 5.6" />
          <path d="M18 2v4h4" />
          <path d="M6 22v-4H2" />
        </svg>
    ),
    more: (
        <svg {...common}>
          <path d="M5 12h.01" />
          <path d="M12 12h.01" />
          <path d="M19 12h.01" />
        </svg>
    ),
    source: (
        <svg {...common}>
          <path d="M4 15h16" />
          <path d="M6 9h12l2 6H4l2-6z" />
          <path d="M8 9l-1 6" />
          <path d="M12 9v6" />
          <path d="M16 9l1 6" />
        </svg>
    ),
    solar: (
        <svg {...common}>
          <path d="M4 15h16" />
          <path d="M6 9h12l2 6H4l2-6z" />
          <path d="M8 9l-1 6" />
          <path d="M12 9v6" />
          <path d="M16 9l1 6" />
          <path d="M12 15v5" />
          <path d="M8 20h8" />
        </svg>
    ),
    grid: (
        <svg {...common}>
          <path d="M12 2v20" />
          <path d="M5 22h14" />
          <path d="M8 6h8" />
          <path d="M6 14h12" />
          <path d="M8 6L4 22" />
          <path d="M16 6l4 16" />
        </svg>
    ),
    generator: (
        <svg {...common}>
          <rect x="4" y="9" width="16" height="8" rx="2" />
          <circle cx="8" cy="19" r="1.5" />
          <circle cx="16" cy="19" r="1.5" />
          <path d="M8 9V6h8v3" />
          <path d="M9 13h6" />
        </svg>
    ),
    battery: (
        <svg {...common}>
          <rect x="4" y="8" width="16" height="9" rx="2" />
          <path d="M20 11h2v3h-2" />
          <path d="M8 12h4" />
          <path d="M10 10v4" />
        </svg>
    ),
    bolt: (
        <svg {...common}>
          <path d="M13 2L4 14h7l-1 8 10-13h-7V2z" />
        </svg>
    ),
    wave: (
        <svg {...common}>
          <path d="M3 12h4l2-5 4 10 2-5h6" />
        </svg>
    ),
    check: (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12.5l2.5 2.5L16 9" />
        </svg>
    ),
    info: (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
    ),
    warning: (
        <svg {...common}>
          <path d="M12 3l10 18H2L12 3z" />
          <path d="M12 9v5" />
          <path d="M12 17h.01" />
        </svg>
    ),
    calendar: (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M3 11h18" />
        </svg>
    ),
    chevron: (
        <svg {...common}>
          <path d="M9 18l6-6-6-6" />
        </svg>
    ),
    ellipsis: (
        <svg {...common}>
          <path d="M5 12h.01" />
          <path d="M12 12h.01" />
          <path d="M19 12h.01" />
        </svg>
    ),
    cloud: (
        <svg {...common}>
          <path d="M17.5 19H7a5 5 0 1 1 1.2-9.85A7 7 0 0 1 21 13.5 3.5 3.5 0 0 1 17.5 19z" />
        </svg>
    ),
    wifi: (
        <svg {...common}>
          <path d="M5 13a10 10 0 0 1 14 0" />
          <path d="M8.5 16.5a5 5 0 0 1 7 0" />
          <path d="M12 20h.01" />
        </svg>
    ),
  };

  return icons[name];
}

function ModeSelector({
                        onSelect,
                      }: {
  onSelect: (mode: Exclude<Mode, "selector">) => void;
}): ReactElement {
  return (
      <main className="selector-page">
        <section className="selector-card">
          <div className="selector-icon">
            <Icon name="operator" size={58} />
          </div>

          <p className="selector-kicker">Plataforma de monitoreo energético</p>
          <h1>Usuario Operador</h1>
          <p className="selector-text">
            Selecciona la interfaz que deseas visualizar.
          </p>

          <div className="selector-actions">
            <button type="button" onClick={() => onSelect("mobile")}>
              <Icon name="mobile" size={34} />
              <span>Mobile</span>
            </button>

            <button type="button" onClick={() => onSelect("web")}>
              <Icon name="desktop" size={38} />
              <span>Web</span>
            </button>
          </div>
        </section>
      </main>
  );
}

interface AppViewProps {
  screen: Screen;
  setScreen: Dispatch<SetStateAction<Screen>>;
  setMode: Dispatch<SetStateAction<Mode>>;
}

function OperatorMobile({
                          screen,
                          setScreen,
                          setMode,
                        }: AppViewProps): ReactElement {
  return (
      <main className="mobile-page">
        <button
            type="button"
            className="change-mode-button"
            onClick={() => setMode("selector")}
        >
          Cambiar vista
        </button>

        <section className="phone-shell">
          {renderMobileScreen(screen, setScreen)}

          <MobileBottomNav
              active={getParentNav(screen)}
              onNavigate={(next) => {
                if (next === "more") {
                  setScreen("more");
                  return;
                }

                setScreen(next);
              }}
          />
        </section>
      </main>
  );
}

function renderMobileScreen(
    screen: Screen,
    setScreen: Dispatch<SetStateAction<Screen>>
): ReactElement {
  switch (screen) {
    case "source":
      return <SourceScreen variant="mobile" setScreen={setScreen} />;
    case "alerts":
      return <AlertsScreen variant="mobile" setScreen={setScreen} />;
    case "alertDetail":
      return <AlertDetailScreen variant="mobile" setScreen={setScreen} />;
    case "incidents":
      return <IncidentsScreen variant="mobile" setScreen={setScreen} />;
    case "newIncident":
      return <NewIncidentScreen variant="mobile" setScreen={setScreen} />;
    case "incidentDetail":
      return <IncidentDetailScreen variant="mobile" setScreen={setScreen} />;
    case "checks":
      return <ChecksScreen variant="mobile" setScreen={setScreen} />;
    case "newCheck":
      return <NewCheckScreen variant="mobile" setScreen={setScreen} />;
    case "events":
      return <EventsScreen variant="mobile" setScreen={setScreen} />;
    case "sync":
      return <SyncScreen variant="mobile" setScreen={setScreen} />;
    case "more":
      return <MoreScreen setScreen={setScreen} />;
    case "home":
    default:
      return <HomeScreen variant="mobile" setScreen={setScreen} />;
  }
}

function OperatorWeb({
                       screen,
                       setScreen,
                       setMode,
                     }: AppViewProps): ReactElement {
  return (
      <main className="web-page">
        <aside className="web-sidebar">
          <SideButton
              icon="home"
              label="Inicio"
              active={getParentNav(screen) === "home"}
              onClick={() => setScreen("home")}
          />
          <SideButton
              icon="alert"
              label="Alertas"
              active={getParentNav(screen) === "alerts"}
              onClick={() => setScreen("alerts")}
          />
          <SideButton
              icon="incident"
              label="Incidencias"
              active={getParentNav(screen) === "incidents"}
              onClick={() => setScreen("incidents")}
          />
          <SideButton
              icon="checks"
              label="Chequeos"
              active={getParentNav(screen) === "checks"}
              onClick={() => setScreen("checks")}
          />
          <SideButton
              icon="events"
              label="Eventos"
              active={screen === "events"}
              onClick={() => setScreen("events")}
          />
          <SideButton
              icon="sync"
              label="Sincronización"
              active={screen === "sync"}
              onClick={() => setScreen("sync")}
          />
          <SideButton icon="more" label="Más" />
        </aside>

        <section className="web-main">
          <button
              type="button"
              className="change-mode-button web-change"
              onClick={() => setMode("selector")}
          >
            Cambiar vista
          </button>

          <WebBrand />

          {renderWebScreen(screen, setScreen)}
        </section>
      </main>
  );
}

function renderWebScreen(
    screen: Screen,
    setScreen: Dispatch<SetStateAction<Screen>>
): ReactElement {
  switch (screen) {
    case "source":
      return <SourceScreen variant="web" setScreen={setScreen} />;
    case "alerts":
      return <AlertsScreen variant="web" setScreen={setScreen} />;
    case "alertDetail":
      return <AlertDetailScreen variant="web" setScreen={setScreen} />;
    case "incidents":
      return <IncidentsScreen variant="web" setScreen={setScreen} />;
    case "newIncident":
      return <NewIncidentScreen variant="web" setScreen={setScreen} />;
    case "incidentDetail":
      return <IncidentDetailScreen variant="web" setScreen={setScreen} />;
    case "checks":
      return <ChecksScreen variant="web" setScreen={setScreen} />;
    case "newCheck":
      return <NewCheckScreen variant="web" setScreen={setScreen} />;
    case "events":
      return <EventsScreen variant="web" setScreen={setScreen} />;
    case "sync":
      return <SyncScreen variant="web" setScreen={setScreen} />;
    case "home":
    default:
      return <HomeScreen variant="web" setScreen={setScreen} />;
  }
}

function getParentNav(screen: Screen): ParentNav {
  if (screen === "alertDetail" || screen === "alerts") return "alerts";
  if (
      screen === "incidents" ||
      screen === "newIncident" ||
      screen === "incidentDetail"
  ) {
    return "incidents";
  }
  if (screen === "checks" || screen === "newCheck") return "checks";
  if (screen === "events" || screen === "sync" || screen === "more") {
    return "more";
  }

  return "home";
}

function WebBrand(): ReactElement {
  return (
      <header className="web-brand">
        <div className="brand-left">
          <Icon name="operator" size={42} />
          <div>
            <h1>Usuario Operador</h1>
            <p>Plataforma de monitoreo energético</p>
          </div>
        </div>

        <button type="button" className="brand-icon">
          <Icon name="bell" />
        </button>
      </header>
  );
}

function MobileTopBar({
                        title,
                        leftIcon = "menu",
                        rightIcon = "bell",
                        onLeft,
                        onRight,
                      }: {
  title: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  onLeft?: () => void;
  onRight?: () => void;
}): ReactElement {
  return (
      <header className="mobile-topbar">
        <button type="button" onClick={onLeft} aria-label="Volver">
          <Icon name={leftIcon} />
        </button>

        <h1>{title}</h1>

        <button type="button" onClick={onRight} aria-label="Acción">
          <Icon name={rightIcon} />
        </button>
      </header>
  );
}

function WebPageTitle({
                        number,
                        title,
                        action,
                      }: {
  number: number;
  title: string;
  action?: ReactElement;
}): ReactElement {
  return (
      <div className="web-title-row">
        <div className="web-title">
          <span>{number}</span>
          <h2>{title}</h2>
        </div>

        {action}
      </div>
  );
}

function PageFrame({
                     variant,
                     children,
                   }: {
  variant: "mobile" | "web";
  children: ReactElement | ReactElement[];
}): ReactElement {
  if (variant === "mobile") {
    return <div className="mobile-scroll">{children}</div>;
  }

  return <div className="web-content">{children}</div>;
}

function HomeScreen({
                      variant,
                      setScreen,
                    }: {
  variant: "mobile" | "web";
  setScreen: Dispatch<SetStateAction<Screen>>;
}): ReactElement {
  const content = (
      <>
        {variant === "web" && (
            <WebPageTitle
                number={1}
                title="Estado energético / Inicio"
                action={
                  <div className="update-text">
                    Última actualización: 10/05/2024 10:30 AM
                    <OnlineStatus />
                  </div>
                }
            />
        )}

        {variant === "mobile" && (
            <div className="top-status">
              <span>Última actualización: 10:30 AM</span>
              <OnlineStatus />
            </div>
        )}

        <section className="home-grid">
          <article className="card energy-card">
            <h2>Disponibilidad energética actual</h2>

            <div className="energy-main">
              <EnergyGauge />
              <div className="metric-stack">
                <MetricTile icon="bolt" label="Voltaje" value="52.4 V" />
                <MetricTile icon="wave" label="Corriente" value="12.6 A" />
                <MetricTile icon="battery" label="Nivel de batería" value="78%" />
              </div>
            </div>
          </article>

          <button
              type="button"
              className="card source-card-button"
              onClick={() => setScreen("source")}
          >
            <div>
              <h2>Fuente monitoreada</h2>
              <div className="source-mini">
                <Icon name="solar" size={34} />
                <strong>Solar - Sistema 1</strong>
              </div>
            </div>
            <Icon name="chevron" />
          </button>

          <article className="card system-state">
            <div className="state-head">
              <h2>Estado del sistema</h2>
              <strong>Normal</strong>
            </div>

            <div className="state-body">
              <Icon name="check" size={22} />
              <span>Sin alertas críticas activas</span>
            </div>
          </article>

          <article className="card local-info">
            <Icon name="cloud" size={28} />
            <div>
              <h2>Información local</h2>
              <p>Mostrando datos guardados localmente.</p>
              <p>Última sincronización exitosa: 10:20 AM</p>
            </div>
          </article>
        </section>
      </>
  );

  if (variant === "mobile") {
    return (
        <>
          <MobileTopBar title="Estado energético" />
          <PageFrame variant="mobile">{content}</PageFrame>
        </>
    );
  }

  return <PageFrame variant="web">{content}</PageFrame>;
}

function SourceScreen({
                        variant,
                        setScreen,
                      }: {
  variant: "mobile" | "web";
  setScreen: Dispatch<SetStateAction<Screen>>;
}): ReactElement {
  const sources = [
    { label: "Solar - Sistema 1", icon: "solar" as IconName, selected: true },
    { label: "Solar - Sistema 2", icon: "solar" as IconName, selected: false },
    {
      label: "Red Eléctrica Principal",
      icon: "grid" as IconName,
      selected: false,
    },
    { label: "Generador Diésel", icon: "generator" as IconName, selected: false },
    {
      label: "Banco de Baterías Aux.",
      icon: "battery" as IconName,
      selected: false,
    },
  ];

  const content = (
      <>
        {variant === "web" && (
            <WebPageTitle number={2} title="Seleccionar fuente a monitorear" />
        )}

        <section className="card form-card">
          <h2>Seleccionar fuente</h2>
          <p>Elige la fuente interoperable que deseas monitorear.</p>

          <div className="source-list">
            {sources.map((source) => (
                <button
                    type="button"
                    key={source.label}
                    className="source-option"
                    onClick={() => setScreen("home")}
                >
                  <div>
                    <Icon name={source.icon} size={30} />
                    <strong>{source.label}</strong>
                  </div>

                  <span className={source.selected ? "radio active" : "radio"} />
                </button>
            ))}
          </div>

          <InfoBox text="La información mostrada dependerá de la fuente seleccionada." />
        </section>
      </>
  );

  if (variant === "mobile") {
    return (
        <>
          <MobileTopBar
              title="Seleccionar fuente"
              leftIcon="back"
              rightIcon="bell"
              onLeft={() => setScreen("home")}
          />
          <PageFrame variant="mobile">{content}</PageFrame>
        </>
    );
  }

  return <PageFrame variant="web">{content}</PageFrame>;
}

function AlertsScreen({
                        variant,
                        setScreen,
                      }: {
  variant: "mobile" | "web";
  setScreen: Dispatch<SetStateAction<Screen>>;
}): ReactElement {
  const content = (
      <>
        {variant === "web" && (
            <WebPageTitle
                number={3}
                title="Alertas y condiciones críticas"
                action={<Icon name="filter" />}
            />
        )}

        <section className="card list-card">
          <Tabs
              items={[
                { label: "Activas", count: 3, active: true },
                { label: "Predictivas", count: 1 },
                { label: "Todas" },
              ]}
          />

          <AlertCard
              color="red"
              title="Sobre carga detectada"
              level="Crítica"
              description="Consumo detectado por encima de lo normal."
              time="10:15 AM"
              source="Solar - Sistema 1"
              onClick={() => setScreen("alertDetail")}
          />

          <AlertCard
              color="orange"
              title="Voltaje fuera de rango"
              level="Alta"
              description="Voltaje actual fuera del rango seguro."
              time="10:10 AM"
              source="Solar - Sistema 1"
              onClick={() => setScreen("alertDetail")}
          />

          <AlertCard
              color="blue"
              title="Riesgo de baja disponibilidad"
              level="Predictiva"
              description="Tendencia descendente en los últimos 30 min."
              time="09:58 AM"
              source="Solar - Sistema 1"
              onClick={() => setScreen("alertDetail")}
          />

          <button
              type="button"
              className="link-button"
              onClick={() => setScreen("alerts")}
          >
            Ver todas las alertas
          </button>
        </section>
      </>
  );

  if (variant === "mobile") {
    return (
        <>
          <MobileTopBar
              title="Alertas"
              rightIcon="filter"
              onLeft={() => setScreen("home")}
          />
          <PageFrame variant="mobile">{content}</PageFrame>
        </>
    );
  }

  return <PageFrame variant="web">{content}</PageFrame>;
}

function AlertDetailScreen({
                             variant,
                             setScreen,
                           }: {
  variant: "mobile" | "web";
  setScreen: Dispatch<SetStateAction<Screen>>;
}): ReactElement {
  const content = (
      <>
        {variant === "web" && <WebPageTitle number={4} title="Detalle de alerta" />}

        <section className="card detail-card">
          <div className="detail-alert-head">
            <Icon name="warning" size={28} />
            <h2>Sobre carga detectada</h2>
            <Badge color="red">Crítica</Badge>
          </div>

          <DetailRow label="ID de alerta" value="ALT-2024-00023" />
          <DetailRow label="Fecha y hora" value="18/05/2024 10:15 AM" />
          <DetailRow label="Fuente" value="Solar - Sistema 1" />

          <h3>Descripción</h3>
          <p>
            Se ha detectado un consumo superior al 90% de la capacidad nominal del
            sistema.
          </p>

          <h3>Recomendación</h3>
          <p>Reducir la carga conectada y verificar los dispositivos activos.</p>

          <InfoBox text="Interpreta la alerta y toma las acciones necesarias en campo." />

          <button
              type="button"
              className="outline-button"
              onClick={() => setScreen("alerts")}
          >
            Volver a alertas
          </button>
        </section>
      </>
  );

  if (variant === "mobile") {
    return (
        <>
          <MobileTopBar
              title="Detalle de alerta"
              leftIcon="back"
              rightIcon="ellipsis"
              onLeft={() => setScreen("alerts")}
          />
          <PageFrame variant="mobile">{content}</PageFrame>
        </>
    );
  }

  return <PageFrame variant="web">{content}</PageFrame>;
}

function IncidentsScreen({
                           variant,
                           setScreen,
                         }: {
  variant: "mobile" | "web";
  setScreen: Dispatch<SetStateAction<Screen>>;
}): ReactElement {
  const content = (
      <>
        {variant === "web" && (
            <WebPageTitle
                number={5}
                title="Incidencias (Listado)"
                action={
                  <button
                      type="button"
                      className="round-action"
                      onClick={() => setScreen("newIncident")}
                  >
                    <Icon name="plus" />
                  </button>
                }
            />
        )}

        <section className="card list-card">
          <SearchBox placeholder="Buscar incidencias" />

          <Tabs
              items={[
                { label: "Todas", count: 5, active: true },
                { label: "Abiertas", count: 2 },
                { label: "Cerradas", count: 3 },
              ]}
          />

          <IncidentCard
              id="INC-2024-00045"
              title="Consumo atípico detectado"
              date="18/05/2024 10:20 AM"
              source="Solar - Sistema 1"
              status="Abierta"
              accent="red"
              onClick={() => setScreen("incidentDetail")}
          />

          <IncidentCard
              id="INC-2024-00044"
              title="Caída de voltaje intermitente"
              date="17/05/2024 04:15 PM"
              source="Red Eléctrica Principal"
              status="Abierta"
              accent="orange"
              onClick={() => setScreen("incidentDetail")}
          />

          <IncidentCard
              id="INC-2024-00043"
              title="Baja disponibilidad energética"
              date="16/05/2024 11:30 AM"
              source="Solar - Sistema 2"
              status="Cerrada"
              accent="green"
              onClick={() => setScreen("incidentDetail")}
          />
        </section>
      </>
  );

  if (variant === "mobile") {
    return (
        <>
          <MobileTopBar
              title="Incidencias"
              rightIcon="plus"
              onRight={() => setScreen("newIncident")}
          />
          <PageFrame variant="mobile">{content}</PageFrame>
        </>
    );
  }

  return <PageFrame variant="web">{content}</PageFrame>;
}

function NewIncidentScreen({
                             variant,
                             setScreen,
                           }: {
  variant: "mobile" | "web";
  setScreen: Dispatch<SetStateAction<Screen>>;
}): ReactElement {
  const content = (
      <>
        {variant === "web" && <WebPageTitle number={6} title="Registrar incidencia" />}

        <section className="card form-card">
          <h2>Nueva incidencia</h2>

          <FormField label="Fuente">
            <select defaultValue="Solar - Sistema 1">
              <option>Solar - Sistema 1</option>
              <option>Solar - Sistema 2</option>
              <option>Red Eléctrica Principal</option>
            </select>
          </FormField>

          <FormField label="Título">
            <input placeholder="Ej. Consumo atípico detectado" />
          </FormField>

          <FormField label="Descripción">
            <textarea placeholder="Describe la incidencia observada..." />
          </FormField>

          <FormField label="Fecha y hora">
            <div className="input-with-icon">
              <input defaultValue="18/05/2024 10:25 AM" />
              <Icon name="calendar" size={18} />
            </div>
          </FormField>

          <InfoBox text="Sin conexión, la incidencia se guardará localmente y se sincronizará cuando vuelva la conexión." />

          <button
              type="button"
              className="primary-button"
              onClick={() => setScreen("incidents")}
          >
            Guardar incidencia
          </button>
        </section>
      </>
  );

  if (variant === "mobile") {
    return (
        <>
          <MobileTopBar
              title="Nueva incidencia"
              leftIcon="back"
              rightIcon="bell"
              onLeft={() => setScreen("incidents")}
          />
          <PageFrame variant="mobile">{content}</PageFrame>
        </>
    );
  }

  return <PageFrame variant="web">{content}</PageFrame>;
}

function IncidentDetailScreen({
                                variant,
                                setScreen,
                              }: {
  variant: "mobile" | "web";
  setScreen: Dispatch<SetStateAction<Screen>>;
}): ReactElement {
  const content = (
      <>
        {variant === "web" && (
            <WebPageTitle number={7} title="Detalle / Trazabilidad de incidencia" />
        )}

        <section className="card detail-card">
          <div className="incident-detail-head">
            <h2>INC-2024-00045</h2>
            <Badge color="red">Abierta</Badge>
          </div>

          <DetailRow label="Fuente" value="Solar - Sistema 1" />
          <DetailRow label="Fecha y hora" value="18/05/2024 10:20 AM" />

          <h3>Descripción</h3>
          <p>
            Se detectó consumo por encima del 90% de la capacidad del inversor
            durante 10 min.
          </p>

          <h3>Seguimiento</h3>

          <div className="timeline">
            <TimelineItem
                time="18/05/2024 10:25 AM"
                text="Se verificó la carga conectada."
                user="Operador 1"
            />
            <TimelineItem
                time="18/05/2024 10:30 AM"
                text="Se redujo la carga."
                user="Operador 1"
            />
          </div>

          <button
              type="button"
              className="primary-button"
              onClick={() => setScreen("incidents")}
          >
            Cerrar incidencia
          </button>
        </section>
      </>
  );

  if (variant === "mobile") {
    return (
        <>
          <MobileTopBar
              title="Detalle de incidencia"
              leftIcon="back"
              rightIcon="ellipsis"
              onLeft={() => setScreen("incidents")}
          />
          <PageFrame variant="mobile">{content}</PageFrame>
        </>
    );
  }

  return <PageFrame variant="web">{content}</PageFrame>;
}

function ChecksScreen({
                        variant,
                        setScreen,
                      }: {
  variant: "mobile" | "web";
  setScreen: Dispatch<SetStateAction<Screen>>;
}): ReactElement {
  const content = (
      <>
        {variant === "web" && (
            <WebPageTitle
                number={8}
                title="Chequeos operativos (Listado)"
                action={
                  <button
                      type="button"
                      className="round-action"
                      onClick={() => setScreen("newCheck")}
                  >
                    <Icon name="plus" />
                  </button>
                }
            />
        )}

        <section className="card list-card">
          <SearchBox placeholder="Buscar chequeos" />

          <Tabs
              items={[
                { label: "Todos", count: 4, active: true },
                { label: "Pendientes", count: 1 },
                { label: "Completados", count: 3 },
              ]}
          />

          <CheckCard
              id="CHK-2024-00078"
              date="18/05/2024 09:00 AM"
              source="Solar - Sistema 1"
              status="Completado"
              accent="green"
          />

          <CheckCard
              id="CHK-2024-00077"
              date="17/05/2024 09:05 AM"
              source="Solar - Sistema 1"
              status="Completado"
              accent="green"
          />

          <CheckCard
              id="CHK-2024-00076"
              date="16/05/2024 09:10 AM"
              source="Red Eléctrica Principal"
              status="Pendiente"
              accent="orange"
          />
        </section>
      </>
  );

  if (variant === "mobile") {
    return (
        <>
          <MobileTopBar
              title="Chequeos"
              rightIcon="plus"
              onRight={() => setScreen("newCheck")}
          />
          <PageFrame variant="mobile">{content}</PageFrame>
        </>
    );
  }

  return <PageFrame variant="web">{content}</PageFrame>;
}

function NewCheckScreen({
                          variant,
                          setScreen,
                        }: {
  variant: "mobile" | "web";
  setScreen: Dispatch<SetStateAction<Screen>>;
}): ReactElement {
  const content = (
      <>
        {variant === "web" && (
            <WebPageTitle number={9} title="Registrar chequeo operativo" />
        )}

        <section className="card form-card">
          <h2>Nuevo chequeo</h2>

          <FormField label="Fuente">
            <select defaultValue="Solar - Sistema 1">
              <option>Solar - Sistema 1</option>
              <option>Solar - Sistema 2</option>
            </select>
          </FormField>

          <div className="form-two">
            <FormField label="Fecha">
              <input defaultValue="18/05/2024" />
            </FormField>

            <FormField label="Hora">
              <div className="input-with-icon">
                <input defaultValue="09:10 AM" />
                <Icon name="calendar" size={18} />
              </div>
            </FormField>
          </div>

          <h3 className="form-subtitle">Ítems de chequeo</h3>

          <div className="check-items">
            <label>
              <span>Ítem configurado 1</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label>
              <span>Ítem configurado 2</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label>
              <span>Ítem configurado 3</span>
              <input type="checkbox" />
            </label>
          </div>

          <FormField label="Observaciones (opcional)">
            <textarea placeholder="Escribe observaciones..." />
          </FormField>

          <InfoBox text="Sin conexión, este chequeo se guardará localmente y se sincronizará cuando vuelva la conexión." />

          <button
              type="button"
              className="primary-button"
              onClick={() => setScreen("checks")}
          >
            Guardar chequeo
          </button>
        </section>
      </>
  );

  if (variant === "mobile") {
    return (
        <>
          <MobileTopBar
              title="Nuevo chequeo"
              leftIcon="back"
              rightIcon="bell"
              onLeft={() => setScreen("checks")}
          />
          <PageFrame variant="mobile">{content}</PageFrame>
        </>
    );
  }

  return <PageFrame variant="web">{content}</PageFrame>;
}

function EventsScreen({
                        variant,
                        setScreen,
                      }: {
  variant: "mobile" | "web";
  setScreen: Dispatch<SetStateAction<Screen>>;
}): ReactElement {
  const content = (
      <>
        {variant === "web" && (
            <WebPageTitle
                number={10}
                title="Eventos del sistema / Historial operativo"
                action={<Icon name="filter" />}
            />
        )}

        <section className="card list-card">
          <div className="date-range">15/05/2024 - 18/05/2024</div>

          <EventRow
              color="red"
              title="Alerta crítica"
              description="Sobre carga detectada"
              code="Solar - Sistema 1"
              date="18/05/2024 10:15 AM"
          />

          <EventRow
              color="orange"
              title="Alerta alta"
              description="Voltaje fuera de rango"
              code="Solar - Sistema 1"
              date="18/05/2024 10:10 AM"
          />

          <EventRow
              color="green"
              title="Chequeo completado"
              description="CHK-2024-00078"
              code="Solar - Sistema 1"
              date="18/05/2024 09:30 AM"
          />

          <EventRow
              color="blue"
              title="Incidencia registrada"
              description="INC-2024-00044"
              code="Red Eléctrica Principal"
              date="17/05/2024 04:15 PM"
          />

          <button
              type="button"
              className="outline-button"
              onClick={() => setScreen("events")}
          >
            Ver historial completo
          </button>
        </section>
      </>
  );

  if (variant === "mobile") {
    return (
        <>
          <MobileTopBar
              title="Eventos del sistema"
              rightIcon="filter"
              onLeft={() => setScreen("more")}
          />
          <PageFrame variant="mobile">{content}</PageFrame>
        </>
    );
  }

  return <PageFrame variant="web">{content}</PageFrame>;
}

function SyncScreen({
                      variant,
                      setScreen,
                    }: {
  variant: "mobile" | "web";
  setScreen: Dispatch<SetStateAction<Screen>>;
}): ReactElement {
  const content = (
      <>
        {variant === "web" && (
            <WebPageTitle number={11} title="Sincronización y modo offline" />
        )}

        <section className="card sync-card">
          <div className="sync-success">
            <Icon name="cloud" size={48} />
            <div>
              <h2>Sincronizado</h2>
              <p>Última sincronización</p>
              <strong>18/05/2024 10:30 AM</strong>
            </div>
          </div>

          <h3>Datos pendientes</h3>

          <div className="pending-table">
            <div>
              <span>Incidencias</span>
              <strong>2</strong>
            </div>
            <div>
              <span>Chequeos</span>
              <strong>1</strong>
            </div>
            <div>
              <span>Total</span>
              <strong>3</strong>
            </div>
          </div>

          <button type="button" className="primary-button">
            Sincronizar ahora
          </button>

          <div className="offline-box">
            <Icon name="wifi" />
            <div>
              <h3>Modo offline activo</h3>
              <p>Los datos se guardan localmente hasta restablecer conexión.</p>
            </div>
          </div>
        </section>
      </>
  );

  if (variant === "mobile") {
    return (
        <>
          <MobileTopBar
              title="Sincronización"
              leftIcon="back"
              rightIcon="bell"
              onLeft={() => setScreen("more")}
          />
          <PageFrame variant="mobile">{content}</PageFrame>
        </>
    );
  }

  return <PageFrame variant="web">{content}</PageFrame>;
}

function MoreScreen({
                      setScreen,
                    }: {
  setScreen: Dispatch<SetStateAction<Screen>>;
}): ReactElement {
  return (
      <>
        <MobileTopBar title="Más" rightIcon="bell" />

        <div className="mobile-scroll">
          <section className="card more-card">
            <button type="button" onClick={() => setScreen("source")}>
              <Icon name="source" />
              <span>Seleccionar fuente</span>
              <Icon name="chevron" />
            </button>

            <button type="button" onClick={() => setScreen("events")}>
              <Icon name="events" />
              <span>Eventos del sistema</span>
              <Icon name="chevron" />
            </button>

            <button type="button" onClick={() => setScreen("sync")}>
              <Icon name="sync" />
              <span>Sincronización</span>
              <Icon name="chevron" />
            </button>
          </section>
        </div>
      </>
  );
}

function OnlineStatus(): ReactElement {
  return (
      <span className="online-status">
      <i />
      En línea
    </span>
  );
}

function EnergyGauge(): ReactElement {
  return (
      <div className="gauge-block">
        <div className="semi-gauge">
          <div className="gauge-value">
            <strong>{ENERGY}</strong>
            <span>%</span>
          </div>
        </div>

        <p>Disponible</p>
        <small>3h 45m restantes</small>
      </div>
  );
}

function MetricTile({
                      icon,
                      label,
                      value,
                    }: {
  icon: IconName;
  label: string;
  value: string;
}): ReactElement {
  return (
      <article className="metric-tile">
        <Icon name={icon} size={26} />
        <div>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      </article>
  );
}

function InfoBox({ text }: { text: string }): ReactElement {
  return (
      <div className="info-box">
        <Icon name="info" size={19} />
        <p>{text}</p>
      </div>
  );
}

function Badge({
                 children,
                 color,
               }: {
  children: string;
  color: "red" | "orange" | "green" | "blue";
}): ReactElement {
  return <span className={`badge ${color}`}>{children}</span>;
}

function DetailRow({
                     label,
                     value,
                   }: {
  label: string;
  value: string;
}): ReactElement {
  return (
      <div className="detail-row">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
  );
}

function Tabs({
                items,
              }: {
  items: Array<{ label: string; count?: number; active?: boolean }>;
}): ReactElement {
  return (
      <div className="tabs">
        {items.map((item) => (
            <button
                type="button"
                key={item.label}
                className={item.active ? "active" : ""}
            >
              {item.label}
              {typeof item.count === "number" && <span>{item.count}</span>}
            </button>
        ))}
      </div>
  );
}

function AlertCard({
                     color,
                     title,
                     level,
                     description,
                     time,
                     source,
                     onClick,
                   }: {
  color: "red" | "orange" | "blue";
  title: string;
  level: string;
  description: string;
  time: string;
  source: string;
  onClick: () => void;
}): ReactElement {
  return (
      <button type="button" className={`alert-card ${color}`} onClick={onClick}>
        <Icon name="warning" size={24} />
        <div>
          <div className="alert-card-head">
            <h3>{title}</h3>
            <Badge color={color === "blue" ? "blue" : color}>{level}</Badge>
          </div>

          <p>{description}</p>

          <small>
            {time} <span>•</span> {source}
          </small>
        </div>
      </button>
  );
}

function SearchBox({ placeholder }: { placeholder: string }): ReactElement {
  return (
      <div className="search-box">
        <Icon name="info" size={17} />
        <input placeholder={placeholder} />
      </div>
  );
}

function IncidentCard({
                        id,
                        title,
                        date,
                        source,
                        status,
                        accent,
                        onClick,
                      }: {
  id: string;
  title: string;
  date: string;
  source: string;
  status: string;
  accent: "red" | "orange" | "green";
  onClick: () => void;
}): ReactElement {
  return (
      <button
          type="button"
          className={`record-card ${accent}`}
          onClick={onClick}
      >
        <div>
          <strong>{id}</strong>
          <h3>{title}</h3>
          <p>{date}</p>
          <p>{source}</p>
        </div>

        <Badge color={accent}>{status}</Badge>
      </button>
  );
}

function CheckCard({
                     id,
                     date,
                     source,
                     status,
                     accent,
                   }: {
  id: string;
  date: string;
  source: string;
  status: string;
  accent: "green" | "orange";
}): ReactElement {
  return (
      <article className={`record-card static ${accent}`}>
        <div>
          <strong>{id}</strong>
          <p>{date}</p>
          <p>{source}</p>
        </div>

        <Badge color={accent}>{status}</Badge>
      </article>
  );
}

function TimelineItem({
                        time,
                        text,
                        user,
                      }: {
  time: string;
  text: string;
  user: string;
}): ReactElement {
  return (
      <div className="timeline-item">
        <span />
        <div>
          <strong>{time}</strong>
          <p>{text}</p>
          <p>{user}</p>
        </div>
      </div>
  );
}

function FormField({
                     label,
                     children,
                   }: {
  label: string;
  children: ReactElement;
}): ReactElement {
  return (
      <label className="form-field">
        <span>{label}</span>
        {children}
      </label>
  );
}

function EventRow({
                    color,
                    title,
                    description,
                    code,
                    date,
                  }: {
  color: "red" | "orange" | "green" | "blue";
  title: string;
  description: string;
  code: string;
  date: string;
}): ReactElement {
  return (
      <article className="event-row">
        <div className={`event-icon ${color}`}>
          <Icon name={color === "green" ? "check" : color === "blue" ? "info" : "warning"} />
        </div>

        <div>
          <strong>{date}</strong>
          <h3>{title}: <span>{description}</span></h3>
          <p>{code}</p>
        </div>
      </article>
  );
}

function MobileBottomNav({
                           active,
                           onNavigate,
                         }: {
  active: ParentNav;
  onNavigate: (screen: ParentNav) => void;
}): ReactElement {
  const items: Array<{
    id: ParentNav;
    label: string;
    icon: IconName;
  }> = [
    { id: "home", label: "Inicio", icon: "home" },
    { id: "alerts", label: "Alertas", icon: "alert" },
    { id: "incidents", label: "Incidencias", icon: "incident" },
    { id: "checks", label: "Chequeos", icon: "checks" },
    { id: "more", label: "Más", icon: "more" },
  ];

  return (
      <nav className="mobile-nav">
        {items.map((item) => (
            <button
                type="button"
                key={item.id}
                className={active === item.id ? "active" : ""}
                onClick={() => onNavigate(item.id)}
            >
              <Icon name={item.icon} size={22} />
              <span>{item.label}</span>
            </button>
        ))}
      </nav>
  );
}

function SideButton({
                      icon,
                      label,
                      active = false,
                      onClick,
                    }: {
  icon: IconName;
  label: string;
  active?: boolean;
  onClick?: () => void;
}): ReactElement {
  return (
      <button
          type="button"
          className={active ? "side-button active" : "side-button"}
          onClick={onClick}
      >
        <Icon name={icon} size={25} />
        <span>{label}</span>
      </button>
  );
}

export default App;