import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */

    // fixed google avatar issue
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'referrer-policy', value: 'no-referrer'}
                ]
            }
        ]
    }
};

export default withFlowbiteReact(nextConfig);