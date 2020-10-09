/**
 * <If teste={exp}>
 *     <span>...</span>
 *     <span>...</span>
 *     <span>...</span>
 * </If>
 */

export default props => {
    return props.teste ? props.children : false;
}
