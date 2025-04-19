import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, BarChart3, PenSquare, Database, Zap, Globe, Server, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getMockLiveScores } from '@/services/scoresApi';
import ScoreCard from '@/components/ScoreCard';

const Index = () => {
  const featuredMatches = getMockLiveScores().slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-sports-gradient py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Khela Onchain Arena
            </h1>
            <p className="text-xl text-white/90 mb-8">
              The first Web3 sports analytics platform storing verified sports data on Filecoin. 
              Connect your wallet and join the decentralized sports revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/live-scores">Check Live Scores</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/publish">Become a Publisher</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Globe className="h-8 w-8 text-primary" />}
              title="Live Sports Data"
              description="Get real-time scores and statistics from major sports leagues around the world."
            />
            <FeatureCard 
              icon={<Server className="h-8 w-8 text-primary" />}
              title="Decentralized Storage"
              description="All data is stored permanently on Filecoin via Lighthouse, ensuring censorship resistance."
            />
            <FeatureCard 
              icon={<Shield className="h-8 w-8 text-primary" />}
              title="Sports Publishing"
              description="Apply to become a verified publisher and share your sports analysis and research."
            />
          </div>
        </div>
      </section>

      {/* Live Scores Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Live Scores</h2>
            <Button asChild variant="outline">
              <Link to="/live-scores">View All Scores</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredMatches.map((match) => (
              <ScoreCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>

      {/* Web3 Integration */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Web3 Integration</h2>
            <p className="text-lg text-gray-600 mb-8">
              Khela leverages Web3 technology to provide a secure, transparent, and censorship-resistant
              platform for sports data and analytics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-lg border border-gray-200 bg-white">
                <p className="font-medium">RainbowKit Authentication</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 bg-white">
                <p className="font-medium">Filecoin Storage via Lighthouse</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-200 bg-white">
                <p className="font-medium">Decentralized Content</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-sports-gradient">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Trophy className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the Khela Community
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect your wallet and become part of the future of decentralized sports analysis.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/publish">Start Publishing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardContent className="pt-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Index;
