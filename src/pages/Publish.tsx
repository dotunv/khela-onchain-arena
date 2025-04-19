
import React from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import PublisherApplicationForm from '@/components/PublisherApplicationForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Publish: React.FC = () => {
  const { isConnected } = useAccount();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Become a Publisher</h1>
        <p className="text-gray-600 mb-8">
          Join the Khela Onchain Arena as a sports content publisher and share your analysis and insights with our community.
        </p>
        
        {isConnected ? (
          <PublisherApplicationForm />
        ) : (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Connect Your Wallet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                You need to connect your wallet to submit a publisher application. Your application will be stored securely on Filecoin.
              </p>
              <div className="flex justify-center">
                <ConnectButton showBalance={false} />
              </div>
            </CardContent>
          </Card>
        )}
        
        <div className="mt-10 space-y-6">
          <section className="bg-slate-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Why Publish on Khela?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-md bg-white">
                <h3 className="font-semibold mb-2">Decentralized Storage</h3>
                <p className="text-gray-600">Your content is stored on Filecoin, ensuring censorship resistance and permanence.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-md bg-white">
                <h3 className="font-semibold mb-2">Community Exposure</h3>
                <p className="text-gray-600">Reach a growing community of Web3 sports enthusiasts and analysts.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-md bg-white">
                <h3 className="font-semibold mb-2">Monetization Opportunities</h3>
                <p className="text-gray-600">Future features will include token incentives for quality content and analysis.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-md bg-white">
                <h3 className="font-semibold mb-2">True Ownership</h3>
                <p className="text-gray-600">Maintain ownership and attribution of your content through on-chain verification.</p>
              </div>
            </div>
          </section>
          
          <section className="bg-slate-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Application Process</h2>
            <ol className="list-decimal list-inside space-y-3 pl-4">
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">Submit the application form</span> with your details and experience
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">Application is stored on Filecoin</span> through Lighthouse
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">Our team reviews your application</span> and sample work
              </li>
              <li className="text-gray-600">
                <span className="font-medium text-gray-800">Approved publishers receive access</span> to the content publishing platform
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Publish;
