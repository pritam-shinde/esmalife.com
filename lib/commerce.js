import CommerceSDK from '@chec/commerce.js'

const commerce = new CommerceSDK(process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY, true);

export default commerce