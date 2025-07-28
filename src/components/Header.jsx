import React from 'react';
import { SearchIcon, BellIcon, MenuIcon } from './Icons';
import { colors } from '../styles';

export const Header = () => (
  <header style={{
    backgroundColor: colors.secondary,
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
    <MenuIcon color={colors.primary} />
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: 32,
        height: 32,
        backgroundColor: colors.accent,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <span style={{ color: colors.primary, fontWeight: 'bold', fontSize: 14 }}>B</span>
      </div>
      <span style={{ fontWeight: 600, color: colors.primary }}>Beauty App</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <SearchIcon color={colors.primary} />
      <BellIcon color={colors.primary} />
      <div style={{
        width: 32,
        height: 32,
        backgroundColor: colors.accent,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 14
      }}>U</div>
    </div>
  </header>
);