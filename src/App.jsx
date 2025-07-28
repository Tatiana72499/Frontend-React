import { useState } from "react"

const App = () => {
  const [activeTab, setActiveTab] = useState("home")
  const [selectedCategory, setSelectedCategory] = useState("todos")

  // Paleta de colores
  const colors = {
    lightPink: "#FAE3E3",
    peach: "#FAAC5F",
    hotPink: "#FF8AAF",
    lilac: "#C988B9",
    deepPurple: "#B257C9"
  }

  const lentes = [
    {
      id: 1,
      nombre: "Sono Blue",
      precio: "150Bs",
      destacado: true,
      categoria: "cosmeticos",
      descripcion: "Lentes de contacto azules para un look natural",
      imagen: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      nombre: "Sono Green",
      precio: "150Bs",
      destacado: true,
      categoria: "cosmeticos",
      descripcion: "Lentes verdes que realzan tu mirada",
      imagen: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      nombre: "Sono Gray",
      precio: "150Bs",
      destacado: true,
      categoria: "cosmeticos",
      descripcion: "Elegantes lentes grises para cualquier ocasión",
      imagen: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      nombre: "Pupliente para Cosplay",
      precio: "180Bs",
      destacado: false,
      categoria: "cosplay",
      descripcion: "Lentes especiales para cosplay y efectos dramáticos",
      imagen: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      nombre: "Sono Brown",
      precio: "150Bs",
      destacado: false,
      categoria: "cosmeticos",
      descripcion: "Lentes marrones para un look cálido y natural",
      imagen: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      nombre: "Galaxy Purple",
      precio: "200Bs",
      destacado: true,
      categoria: "cosplay",
      descripcion: "Lentes púrpuras con efecto galaxia",
      imagen: "/placeholder.svg?height=300&width=300",
    },
  ]

  const categorias = [
    { id: "todos", nombre: "Todos" },
    { id: "cosmeticos", nombre: "Cosméticos" },
    { id: "cosplay", nombre: "Cosplay" },
    { id: "Estuches", nombre: "Estuches" },
    { id: "Liquido", nombre: "Líquido" },
  ]

  const lentesFiltrados = selectedCategory === "todos" 
    ? lentes 
    : lentes.filter(lente => lente.categoria === selectedCategory)

  // Iconos SVG
  const HomeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  )

  const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )

  const HeartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )

  const UserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )

  const ShoppingCartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )

  const StarIcon = ({ filled = false }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? colors.peach : "none"} stroke={colors.peach} strokeWidth="2">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  )

  // Estilos
  const styles = {
    app: {
    fontFamily: "'Inter', sans-serif",
    minHeight: "100vh",
    backgroundColor: colors.white,
    color: "#333",
    paddingTop: "80px",
    paddingBottom: "80px",
    display: "flex",          // Añadido
    flexDirection: "column",  // Añadido
    alignItems: "center",     // Centra horizontalmente
    },
    header: {
      background: `linear-gradient(135deg, ${colors.lightPink} 0%, ${colors.hotPink} 100%)`,
      height: "80px",
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: "0 2px 15px rgba(255, 243, 243, 0.74)",
      display: "flex",
      justifyContent: "center",
    },
    headerContainer: {
      width: "100%",
      maxWidth: "1400px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
    },
    logo: {
      color: colors.white,
      fontSize: "1.8rem",
      fontWeight: 800,
      margin: 0,
      letterSpacing: "1px",
      textShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    headerIcons: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    iconButton: {
      background: "rgba(255,255,255,0.3)",
      border: "none",
      borderRadius: "50%",
      width: "44px",
      height: "44px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      color: colors.deepPurple,
    },
    mainContent: {
      width: "100%",
      maxWidth: "1900px",
      padding: "60px 60px",
      boxSizing: "border-box",
    },
    tituloSeccion: {
      textAlign: "center",
      color: colors.black,
      fontSize: "2.2rem",
      marginBottom: "16px",
      fontWeight: 700,
    },
    subtitulo: {
      textAlign: "center",
      color: colors.lilac,
      fontSize: "1.1rem",
      marginBottom: "40px",
      fontWeight: 400,
      lineHeight: "1.5",
    },
    filtros: {
      display: "flex",
      justifyContent: "center",
      gap: "16px",
      marginBottom: "40px",
      flexWrap: "wrap",
    },
    filtroButton: {
      padding: "12px 24px",
      border: `2px solid ${colors.deepPurple}`,
      borderRadius: "25px",
      background: "transparent",
      color: colors.deepPurple,
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "14px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    filtroButtonActive: {
      background: `linear-gradient(135deg, ${colors.deepPurple} 0%, ${colors.lilac} 100%)`,
      color: "white",
      transform: "translateY(-2px)",
      boxShadow: `0 5px 15px ${colors.lilac}80`,
    },
    gridLentes: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "32px",
      padding: "0",
    },
    modeloCard: {
      background: "white",
      borderRadius: "16px",
      overflow: "hidden",
      textAlign: "center",
      boxShadow: `0 8px 20px ${colors.black}`,
      transition: "all 0.3s ease",
      position: "relative",
      cursor: "pointer",
    },
    modeloCardDestacado: {
      transform: "scale(1.02)",
      boxShadow: `0 12px 28px ${colors.hotPink}80`,
      border: `2px solid ${colors.hotPink}`,
    },
    imagenContainer: {
      width: "100%",
      height: "280px",
      background: `linear-gradient(135deg, ${colors.lightPink} 0%, ${colors.hotPink}20 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    imagen: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    destacadoBadge: {
      position: "absolute",
      top: "16px",
      right: "16px",
      background: `linear-gradient(135deg, ${colors.peach} 0%, ${colors.hotPink} 100%)`,
      color: "white",
      padding: "6px 12px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    cardContent: {
      padding: "24px",
    },
    nombreModelo: {
      color: colors.deepPurple,
      fontSize: "1.4rem",
      marginBottom: "12px",
      fontWeight: 700,
    },
    descripcion: {
      color: "#666",
      fontSize: "1rem",
      marginBottom: "20px",
      lineHeight: "1.5",
      minHeight: "60px",
    },
    precio: {
      color: colors.hotPink,
      fontWeight: 800,
      fontSize: "1.5rem",
      marginBottom: "20px",
    },
    addToCartButton: {
      background: `linear-gradient(135deg, ${colors.deepPurple} 0%, ${colors.lilac} 100%)`,
      color: "white",
      border: "none",
      padding: "12px 24px",
      borderRadius: "25px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      width: "100%",
    },
    bottomNav: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: `linear-gradient(135deg, ${colors.lightPink} 0%, ${colors.hotPink} 100%)`,
      padding: "16px 0",
      boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
      zIndex: 900,
    },
    navButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 40px",
    },
    navButton: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: colors.deepPurple,
      transition: "all 0.2s ease",
      padding: "8px 16px",
      borderRadius: "8px",
    },
    navButtonActive: {
      color: "white",
      backgroundColor: colors.hotPink,
      transform: "translateY(-2px)",
    },
    navButtonText: {
      fontSize: "12px",
      marginTop: "6px",
      fontWeight: 600,
    },
  }

  return (
    <div style={styles.app}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <h1 style={styles.logo}>SeetyLens</h1>
          <div style={styles.headerIcons}>
            <button
              style={styles.iconButton}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              <SearchIcon />
            </button>
            <button
              style={styles.iconButton}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              <ShoppingCartIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main style={styles.mainContent}>
        <h2 style={styles.tituloSeccion}>Nuestros Lentes de Contacto</h2>
        <p style={styles.subtitulo}>
          Descubre nuestra exclusiva colección de lentes de contacto premium para todos los estilos y ocasiones
        </p>

        {/* Filtros por categoría */}
        <div style={styles.filtros}>
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              style={{
                ...styles.filtroButton,
                ...(selectedCategory === categoria.id && styles.filtroButtonActive),
              }}
              onClick={() => setSelectedCategory(categoria.id)}
              onMouseEnter={(e) => {
                if (selectedCategory !== categoria.id) {
                  e.target.style.transform = "translateY(-2px)"
                  e.target.style.boxShadow = `0 5px 15px ${colors.lilac}80`
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== categoria.id) {
                  e.target.style.transform = "translateY(0)"
                  e.target.style.boxShadow = "none"
                }
              }}
            >
              {categoria.nombre}
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div style={styles.gridLentes}>
          {lentesFiltrados.map((lente) => (
            <div
              key={lente.id}
              style={{
                ...styles.modeloCard,
                ...(lente.destacado && styles.modeloCardDestacado),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = lente.destacado ? "scale(1.05)" : "scale(1.03)"
                e.currentTarget.style.boxShadow = `0 12px 24px ${colors.hotPink}80`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = lente.destacado ? "scale(1.02)" : "scale(1)"
                e.currentTarget.style.boxShadow = lente.destacado
                  ? `0 12px 28px ${colors.hotPink}80`
                  : `0 8px 20px ${colors.lightPink}`
              }}
            >
              <div style={styles.imagenContainer}>
                <img src={lente.imagen} alt={lente.nombre} style={styles.imagen} />
                {lente.destacado && (
                  <div style={styles.destacadoBadge}>
                    <StarIcon filled={true} />
                    Destacado
                  </div>
                )}
              </div>

              <div style={styles.cardContent}>
                <h3 style={styles.nombreModelo}>{lente.nombre}</h3>
                <p style={styles.descripcion}>{lente.descripcion}</p>
                <p style={styles.precio}>{lente.precio}</p>
                <button
                  style={styles.addToCartButton}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)"
                    e.target.style.boxShadow = `0 8px 20px ${colors.lilac}80`
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "none"
                  }}
                >
                  <ShoppingCartIcon />
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Navegación inferior */}
      <nav style={styles.bottomNav}>
        <div style={styles.navButtons}>
          <button
            style={{
              ...styles.navButton,
              ...(activeTab === "home" && styles.navButtonActive),
            }}
            onClick={() => setActiveTab("home")}
          >
            <HomeIcon />
            <span style={styles.navButtonText}>Inicio</span>
          </button>
          <button
            style={{
              ...styles.navButton,
              ...(activeTab === "search" && styles.navButtonActive),
            }}
            onClick={() => setActiveTab("search")}
          >
            <SearchIcon />
            <span style={styles.navButtonText}>Buscar</span>
          </button>
          <button
            style={{
              ...styles.navButton,
              ...(activeTab === "favorites" && styles.navButtonActive),
            }}
            onClick={() => setActiveTab("favorites")}
          >
            <HeartIcon />
            <span style={styles.navButtonText}>Favoritos</span>
          </button>
          <button
            style={{
              ...styles.navButton,
              ...(activeTab === "profile" && styles.navButtonActive),
            }}
            onClick={() => setActiveTab("profile")}
          >
            <UserIcon />
            <span style={styles.navButtonText}>Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default App