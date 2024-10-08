import { motion } from "framer-motion";

const Layout = ({ children }) => (
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                style={{
                    overflow: "hidden",
                }}
            >
                {children}
            </motion.div>
        );
export default Layout;