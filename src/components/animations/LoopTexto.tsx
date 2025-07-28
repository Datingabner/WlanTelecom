import React from 'react';
import Typed from 'typed.js';

function LoopTexto() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Ideal para trabajar...',
                'Para ver videos...',
                'Para navegar en redes sociales...',
                '¡¡Para navegar en cualquier sitio de Internet!!'
            ],
            typeSpeed: 50,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="App">
            <span ref={el} />
        </div>
    );
}
export default LoopTexto