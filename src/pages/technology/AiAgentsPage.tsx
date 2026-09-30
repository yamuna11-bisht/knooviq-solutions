import React from 'react';
import { AiAgentsPracticePage } from '../ai/AiAgentsPracticePage';

interface TechnologyPageProps {
  onOpenContact: (defaultService?: string) => void;
}

export const AiAgentsPage: React.FC<TechnologyPageProps> = ({ onOpenContact }) => {
  return <AiAgentsPracticePage onOpenContact={onOpenContact} />;
};

export default AiAgentsPage;
