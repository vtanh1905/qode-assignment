/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'rc-util',
    '@ant-design',
    'kitchen-flow-editor',
    '@ant-design/pro-editor',
    'zustand', 'leva', 'antd',
    'rc-pagination',
    'rc-picker'
  ],
  crossOrigin: 'anonymous',
};

export default nextConfig;
