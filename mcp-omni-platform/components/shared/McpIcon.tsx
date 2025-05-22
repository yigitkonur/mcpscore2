import {
  Server, Terminal, Link as LinkIcon, Zap, ShieldCheck, MessageSquare,
  BarChartHorizontalBig, Settings, GitFork, Star, Download, BookOpen, Bug,
  Play, Copy as CopyIcon, Plus, MoreHorizontal, ChevronDown, ChevronUp,
  ChevronsUpDown, Search, Edit, Trash2, Redo, FileText, FolderOpen, Cpu,
  List, Eye, EyeOff, RefreshCcw
} from 'lucide-react';

interface McpIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const McpIcon = ({ name, className, size = 16 }: McpIconProps) => {
  const iconProps = { className, size };
  switch (name.toLowerCase()) {
    case 'api':
      return <Server {...iconProps} />;
    case 'terminal':
      return <Terminal {...iconProps} />;
    case 'externallink':
      return <LinkIcon {...iconProps} />;
    case 'omnilogo':
      return <Zap {...iconProps} />;
    case 'security':
    case 'shield':
      return <ShieldCheck {...iconProps} />;
    case 'reviews':
    case 'comments':
      return <MessageSquare {...iconProps} />;
    case 'deployment':
      return <BarChartHorizontalBig {...iconProps} />;
    case 'settings':
      return <Settings {...iconProps} />;
    case 'fork':
      return <GitFork {...iconProps} />;
    case 'star':
      return <Star {...iconProps} />;
    case 'download':
      return <Download {...iconProps} />;
    case 'docs':
    case 'readme':
      return <BookOpen {...iconProps} />;
    case 'issue':
      return <Bug {...iconProps} />;
    case 'playground':
      return <Play {...iconProps} />;
    case 'copy':
      return <CopyIcon {...iconProps} />;
    case 'add':
      return <Plus {...iconProps} />;
    case 'more':
      return <MoreHorizontal {...iconProps} />;
    case 'chevrondown':
      return <ChevronDown {...iconProps} />;
    case 'chevronup':
      return <ChevronUp {...iconProps} />;
    case 'chevronsupdown':
      return <ChevronsUpDown {...iconProps} />;
    case 'search':
      return <Search {...iconProps} />;
    case 'edit':
      return <Edit {...iconProps} />;
    case 'delete':
      return <Trash2 {...iconProps} />;
    case 'redeploy':
      return <Redo {...iconProps} />;
    case 'logs':
      return <FileText {...iconProps} />;
    case 'files':
      return <FolderOpen {...iconProps} />;
    case 'cpu':
      return <Cpu {...iconProps} />;
    case 'tools':
      return <List {...iconProps} />;
    case 'eyeopen':
      return <Eye {...iconProps} />;
    case 'eyeclosed':
      return <EyeOff {...iconProps} />;
    case 'restart':
      return <RefreshCcw {...iconProps} />;
    default:
      console.warn(`McpIcon: Unknown icon name "${name}"`);
      return null;
  }
};
