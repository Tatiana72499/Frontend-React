import React from 'react';
import { commonStyles, colors } from '../styles';

export const NewModels = ({ models }) => (
  <section>
    <h2 style={commonStyles.sectionTitle}>Nuevos Modelos</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
      {models.map((model) => (
        <div key={model.id} style={commonStyles.card}>
          <div style={{ aspectRatio: '1/1', position: 'relative' }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: colors.light,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: colors.primary }}>Imagen</span>
            </div>
            <div style={{
              position: 'absolute',
              bottom: 8,
              left: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: colors.primary,
              padding: '4px 8px',
              borderRadius: 12,
              fontSize: 12,
              fontWeight: 500
            }}>
              {model.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);