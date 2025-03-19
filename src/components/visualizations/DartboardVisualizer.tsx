import React from 'react';
import { motion } from 'framer-motion';
import { Box, useTheme, Button } from '@mui/material';
import { Stage, Layer, Circle, Line, Text } from 'react-konva';

export const DartboardVisualizer: React.FC = () => {
  const theme = useTheme();
  const [rotation, setRotation] = React.useState(0);
  const [highlights, setHighlights] = React.useState<number[]>([]);
  const [throws, setThrows] = React.useState<{ x: number; y: number }[]>([]);

  const boardRadius = 200;
  const centerX = boardRadius + 50;
  const centerY = boardRadius + 50;

  const sections = Array.from({ length: 20 }, (_, i) => ({
    number: i + 1,
    angle: (18 * i * Math.PI) / 180,
  }));

  const handleBoardClick = (e: any) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    setThrows(prev => [...prev, pointerPosition]);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Stage 
        width={boardRadius * 2 + 100} 
        height={boardRadius * 2 + 100}
        onClick={handleBoardClick}
      >
        <Layer>
          {/* Board rings */}
          <Circle
            x={centerX}
            y={centerY}
            radius={boardRadius}
            stroke={theme.palette.primary.main}
            strokeWidth={2}
            rotation={rotation}
          />

          {/* Section lines */}
          {sections.map((section) => (
            <Line
              key={`line-${section.number}`}
              points={[
                centerX,
                centerY,
                centerX + Math.cos(section.angle) * boardRadius,
                centerY + Math.sin(section.angle) * boardRadius,
              ]}
              stroke={theme.palette.divider}
              strokeWidth={1}
              rotation={rotation}
            />
          ))}

          {/* Numbers */}
          {sections.map((section) => (
            <Text
              key={`text-${section.number}`}
              x={centerX + Math.cos(section.angle) * (boardRadius * 1.1)}
              y={centerY + Math.sin(section.angle) * (boardRadius * 1.1)}
              text={section.number.toString()}
              fontSize={16}
              fill={highlights.includes(section.number) ? 
                theme.palette.secondary.main : 
                theme.palette.text.primary
              }
              rotation={rotation}
            />
          ))}

          {/* Throw markers */}
          {throws.map((t, i) => (
            <Circle
              key={`throw-${i}`}
              x={t.x}
              y={t.y}
              radius={5}
              fill={theme.palette.error.main}
            />
          ))}
        </Layer>
      </Stage>

      <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
        <Button
          variant="outlined"
          onClick={() => setRotation(r => r + 45)}
        >
          Rotate Board
        </Button>
        <Button
          variant="outlined"
          onClick={() => setThrows([])}
        >
          Clear Throws
        </Button>
      </Box>
    </Box>
  );
};
