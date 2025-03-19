import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, useTheme } from '@mui/material';
import { useSpring, animated } from 'react-spring';

export const DartboardDisplay: React.FC = () => {
  const theme = useTheme();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [throws, setThrows] = React.useState<any[]>([]);
  const [highlightedSection, setHighlightedSection] = React.useState<string | null>(null);

  // Animated dart throw effect
  const throwDart = (coordinates: { x: number, y: number }) => {
    const newThrow = {
      id: Date.now(),
      coordinates,
      spring: useSpring({
        from: { x: window.innerWidth, y: -100 },
        to: { x: coordinates.x, y: coordinates.y },
        config: { tension: 200, friction: 20 }
      })
    };
    setThrows([...throws, newThrow]);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '400px',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    >
      <canvas ref={canvasRef} />
      
      <AnimatePresence>
        {throws.map((throwData) => (
          <motion.div
            key={throwData.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{
              position: 'absolute',
              left: throwData.coordinates.x,
              top: throwData.coordinates.y,
            }}
          >
            <animated.div style={throwData.spring}>
              <DartIcon />
            </animated.div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Interactive Sections */}
      <BoardSections
        onSectionHover={setHighlightedSection}
        highlightedSection={highlightedSection}
      />

      {/* Score Popup */}
      <AnimatePresence>
        {highlightedSection && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              bottom: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              background: theme.palette.primary.main,
              padding: '8px 16px',
              borderRadius: '20px',
              color: 'white',
            }}
          >
            {`Score: ${getScoreForSection(highlightedSection)}`}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

// Interactive board sections
const BoardSections: React.FC<{
  onSectionHover: (section: string | null) => void;
  highlightedSection: string | null;
}> = ({ onSectionHover, highlightedSection }) => {
  return (
    <svg viewBox="0 0 100 100" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      {/* Generate interactive paths for each board section */}
      {boardSections.map((section) => (
        <motion.path
          key={section.id}
          d={section.path}
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 0.8, scale: 1.02 }}
          animate={{
            fill: highlightedSection === section.id ? '#f50057' : section.color,
          }}
          onHoverStart={() => onSectionHover(section.id)}
          onHoverEnd={() => onSectionHover(null)}
          transition={{ duration: 0.2 }}
        />
      ))}
    </svg>
  );
};