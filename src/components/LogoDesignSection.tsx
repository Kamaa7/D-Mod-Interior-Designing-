
const LogoDesignSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sattva-dark mb-6">
            Our Brand Identity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the story behind our logo design and brand identity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '100.0000%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}>
            <iframe 
              loading="lazy" 
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0
              }}
              src="https://www.canva.com/design/DAGHgWQUi88/QD-ryNWuMG8jca98EFT3-w/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          
          <div className="text-center mt-4">
            <a
              href="https://www.canva.com/design/DAGHgWQUi88/QD-ryNWuMG8jca98EFT3-w/view?utm_content=DAGHgWQUi88&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
              target="_blank"
              rel="noopener"
              className="text-sattva-orange hover:text-sattva-orange/80 font-medium"
            >
              Gray and Black Simple Studio Logo
            </a>
            <span className="text-gray-600"> by Abdul Aziz</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoDesignSection;
