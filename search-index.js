var searchIndex = JSON.parse('{\
"libceed":{"doc":"libCEED Rust InterfaceThis is the documentation for the…","i":[[3,"Ceed","libceed","A Ceed is a library context representing control of a…",null,null],[4,"MemType","","Many Ceed interfaces take or return pointers to memory.…",null,null],[13,"Host","","",0,null],[13,"Device","","",0,null],[4,"NormType","","Denotes type of vector norm to be computed",null,null],[13,"One","","",1,null],[13,"Two","","",1,null],[13,"Max","","",1,null],[4,"TransposeMode","","Denotes whether a linear transformation or its transpose…",null,null],[13,"NoTranspose","","",2,null],[13,"Transpose","","",2,null],[4,"QuadMode","","Type of quadrature; also used for location of nodes",null,null],[13,"Gauss","","",3,null],[13,"GaussLobatto","","",3,null],[4,"ElemTopology","","Type of basis shape to create non-tensor H1 element basis",null,null],[13,"Line","","",4,null],[13,"Triangle","","",4,null],[13,"Quad","","",4,null],[13,"Tet","","",4,null],[13,"Pyramid","","",4,null],[13,"Prism","","",4,null],[13,"Hex","","",4,null],[4,"EvalMode","","Basis evaluation mode",null,null],[13,"None","","",5,null],[13,"Interp","","",5,null],[13,"Grad","","",5,null],[13,"Div","","",5,null],[13,"Curl","","",5,null],[13,"Weight","","",5,null],[0,"prelude","","",null,null],[0,"basis","","A Ceed Basis defines the discrete finite element basis and…",null,null],[3,"Basis","libceed::basis","",null,null],[4,"BasisOpt","","",null,null],[13,"Some","","",6,null],[13,"Collocated","","",6,null],[11,"create_tensor_H1","","",7,[[["ceed",3]]]],[11,"create_tensor_H1_Lagrange","","",7,[[["quadmode",4],["ceed",3]]]],[11,"create_H1","","",7,[[["elemtopology",4],["ceed",3]]]],[11,"apply","","Apply basis evaluation from nodes to quadrature points or…",7,[[["vector",3],["evalmode",4],["transposemode",4],["vector",3]]]],[11,"get_dimension","","Returns the dimension for given CeedBasis",7,[[]]],[11,"get_num_components","","Returns number of components for given CeedBasis",7,[[]]],[11,"get_num_nodes","","Returns total number of nodes (in dim dimensions) of a…",7,[[]]],[11,"get_num_quadrature_points","","Returns total number of quadrature points (in dim…",7,[[]]],[0,"elem_restriction","libceed","A Ceed ElemRestriction decomposes elements and groups the…",null,null],[3,"ElemRestriction","libceed::elem_restriction","",null,null],[4,"ElemRestrictionOpt","","",null,null],[13,"Some","","",8,null],[13,"None","","",8,null],[11,"create","","",9,[[["memtype",4],["ceed",3]]]],[11,"create_strided","","",9,[[["ceed",3]]]],[11,"create_lvector","","Create an Lvector for an ElemRestriction",9,[[],["vector",3]]],[11,"create_evector","","Create an Evector for an ElemRestriction",9,[[],["vector",3]]],[11,"create_vectors","","Create Vectors for an ElemRestriction",9,[[]]],[11,"apply","","Restrict an Lvector to an Evector or apply its transpose",9,[[["transposemode",4],["vector",3],["vector",3]]]],[11,"get_comp_stride","","Returns the Lvector component stride",9,[[]]],[11,"get_num_elements","","Returns the total number of elements in the range of a…",9,[[]]],[11,"get_elem_size","","Returns the size of elements in the ElemRestriction",9,[[]]],[11,"get_lvector_size","","Returns the size of the Lvector for an ElemRestriction",9,[[]]],[11,"get_num_components","","Returns the number of components in the elements of an…",9,[[]]],[11,"get_multiplicity","","Returns the multiplicity of nodes in an ElemRestriction",9,[[["vector",3]]]],[0,"operator","libceed","A Ceed Operator defines the finite/spectral element…",null,null],[3,"Operator","libceed::operator","",null,null],[3,"CompositeOperator","","",null,null],[11,"create","","",10,[[["ceed",3]]]],[11,"apply","","Apply Operator to a vector",10,[[["vector",3],["vector",3]]]],[11,"apply_add","","Apply Operator to a vector and add result to output vector",10,[[["vector",3],["vector",3]]]],[11,"set_field","","Provide a field to a Operator for use by its QFunction",10,[[]]],[11,"linear_assemble_diagonal","","Assemble the diagonal of a square linear Operator",10,[[["vector",3]]]],[11,"linear_assemble_add_diagonal","","Assemble the diagonal of a square linear Operator",10,[[["vector",3]]]],[11,"linear_assemble_point_block_diagonal","","Assemble the point block diagonal of a square linear…",10,[[["vector",3]]]],[11,"linear_assemble_add_point_block_diagonal","","Assemble the point block diagonal of a square linear…",10,[[["vector",3]]]],[11,"create_multigrid_level","","Create a multigrid coarse Operator and level transfer…",10,[[["elemrestriction",3],["basis",3],["vector",3]]]],[11,"create_multigrid_level_tensor_H1","","Create a multigrid coarse Operator and level transfer…",10,[[["elemrestriction",3],["basis",3],["vec",3],["vector",3]]]],[11,"create_multigrid_level_H1","","Create a multigrid coarse Operator and level transfer…",10,[[["elemrestriction",3],["basis",3],["vector",3]]]],[11,"create","","",11,[[["ceed",3]]]],[11,"apply","","Apply Operator to a vector",11,[[["vector",3],["vector",3]]]],[11,"apply_add","","Apply Operator to a vector and add result to output vector",11,[[["vector",3],["vector",3]]]],[11,"add_sub_operator","","Add a sub-Operator to a Composite Operator",11,[[["operator",3]]]],[11,"linear_asssemble_diagonal","","Assemble the diagonal of a square linear Operator",11,[[["vector",3]]]],[11,"linear_assemble_add_diagonal","","Assemble the point block diagonal of a square linear…",11,[[["vector",3]]]],[11,"linear_assemble_point_block_diagonal","","Assemble the diagonal of a square linear Operator",11,[[["vector",3]]]],[11,"linear_assemble_add_point_block_diagonal","","Assemble the diagonal of a square linear Operator",11,[[["vector",3]]]],[0,"qfunction","libceed","A Ceed QFunction represents the spatial terms of the…",null,null],[3,"QFunction","libceed::qfunction","",null,null],[3,"QFunctionByName","","",null,null],[4,"QFunctionOpt","","",null,null],[13,"SomeQFunction","","",12,null],[13,"SomeQFunctionByName","","",12,null],[13,"None","","",12,null],[6,"QFunctionInputs","","",null,null],[6,"QFunctionOutputs","","",null,null],[6,"QFunctionUserClosure","","",null,null],[11,"create","","",13,[[["box",3],["ceed",3],["qfunctionuserclosure",6]]]],[11,"apply","","Apply the action of a QFunction",13,[[]]],[11,"add_input","","Add a QFunction input",13,[[["evalmode",4]]]],[11,"add_output","","Add a QFunction output",13,[[["evalmode",4]]]],[11,"create","","",14,[[["ceed",3]]]],[11,"apply","","Apply the action of a QFunction",14,[[]]],[0,"vector","libceed","A Ceed Vector constitutes the main data structure and…",null,null],[3,"Vector","libceed::vector","",null,null],[3,"VectorView","","A (host) view of a Vector with Deref to slice. We can\'t…",null,null],[3,"VectorViewMut","","A mutable (host) view of a Vector with Deref to slice.",null,null],[4,"VectorOpt","","",null,null],[13,"Some","","",15,null],[13,"Active","","",15,null],[13,"None","","",15,null],[11,"create","","",16,[[["ceed",3]]]],[11,"from_slice","","Create a Vector from a slice",16,[[["ceed",3]]]],[11,"from_array","","Create a Vector from a mutable array reference",16,[[["ceed",3]]]],[11,"length","","Returns the length of a CeedVector",16,[[]]],[11,"len","","Returns the length of a CeedVector",16,[[]]],[11,"set_value","","Set the CeedVector to a constant value",16,[[]]],[11,"set_slice","","Set values from a slice of the same length",16,[[]]],[11,"sync","","Sync the CeedVector to a specified memtype",16,[[["memtype",4]]]],[11,"view","","Create an immutable view",16,[[],["vectorview",3]]],[11,"view_mut","","Create an mutable view",16,[[],["vectorviewmut",3]]],[11,"norm","","Return the norm of a CeedVector",16,[[["normtype",4]]]],[17,"MAX_QFUNCTION_FIELDS","libceed","",null,null],[11,"init","","Returns a Ceed context initialized with the specified…",17,[[]]],[11,"vector","","Returns a CeedVector of the specified length (does not…",17,[[],["vector",3]]],[11,"vector_from_slice","","Create a Vector initialized with the data (copied) from a…",17,[[],["vector",3]]],[11,"elem_restriction","","Returns a ElemRestriction",17,[[["memtype",4]],["elemrestriction",3]]],[11,"strided_elem_restriction","","Returns a ElemRestriction",17,[[],["elemrestriction",3]]],[11,"basis_tensor_H1","","Returns a tensor-product basis",17,[[],["basis",3]]],[11,"basis_tensor_H1_Lagrange","","Returns a tensor-product Lagrange basis",17,[[["quadmode",4]],["basis",3]]],[11,"basis_H1","","Returns a tensor-product basis",17,[[["elemtopology",4]],["basis",3]]],[11,"q_function_interior","","Returns a CeedQFunction for evaluating interior…",17,[[["box",3],["qfunctionuserclosure",6]],["qfunction",3]]],[11,"q_function_interior_by_name","","Returns a CeedQFunction for evaluating interior…",17,[[],["qfunctionbyname",3]]],[11,"operator","","Returns a Operator and associate a QFunction. A Basis and…",17,[[],["operator",3]]],[11,"composite_operator","","Returns an Operator that composes the action of several…",17,[[],["compositeoperator",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_string","","",17,[[],["string",3]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","libceed::basis","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_string","","",7,[[],["string",3]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","libceed::elem_restriction","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_string","","",9,[[],["string",3]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","libceed::operator","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_string","","",10,[[],["string",3]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_string","","",11,[[],["string",3]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","libceed::qfunction","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_string","","",13,[[],["string",3]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_string","","",14,[[],["string",3]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","libceed::vector","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_string","","",16,[[],["string",3]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_string","","",18,[[],["string",3]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_string","","",19,[[],["string",3]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"drop","libceed::basis","",7,[[]]],[11,"drop","libceed::elem_restriction","",9,[[]]],[11,"drop","libceed::qfunction","",13,[[]]],[11,"drop","libceed::vector","",16,[[]]],[11,"drop","","",18,[[]]],[11,"drop","","",19,[[]]],[11,"drop","libceed","",17,[[]]],[11,"from","libceed::basis","",6,[[["basis",3]]]],[11,"from","libceed::elem_restriction","",8,[[["elemrestriction",3]]]],[11,"from","libceed::qfunction","",12,[[["qfunction",3]]]],[11,"from","","",12,[[["qfunctionbyname",3]]]],[11,"from","libceed::vector","",15,[[["vector",3]]]],[11,"clone","libceed::basis","",6,[[],["basisopt",4]]],[11,"clone","libceed::elem_restriction","",8,[[],["elemrestrictionopt",4]]],[11,"clone","libceed::qfunction","",12,[[],["qfunctionopt",4]]],[11,"clone","libceed::vector","",15,[[],["vectoropt",4]]],[11,"clone","libceed","",0,[[],["memtype",4]]],[11,"clone","","",1,[[],["normtype",4]]],[11,"clone","","",2,[[],["transposemode",4]]],[11,"clone","","",3,[[],["quadmode",4]]],[11,"clone","","",4,[[],["elemtopology",4]]],[11,"clone","","",5,[[],["evalmode",4]]],[11,"eq","","",0,[[["memtype",4]]]],[11,"eq","","",1,[[["normtype",4]]]],[11,"eq","","",2,[[["transposemode",4]]]],[11,"eq","","",3,[[["quadmode",4]]]],[11,"eq","","",4,[[["elemtopology",4]]]],[11,"eq","","",5,[[["evalmode",4]]]],[11,"deref","libceed::vector","",18,[[]]],[11,"deref","","",19,[[]]],[11,"deref_mut","","",19,[[]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",19,[[["formatter",3]],["result",6]]],[11,"fmt","libceed","",17,[[["formatter",3]],["result",6]]],[11,"fmt","libceed::basis","View a Basis",7,[[["formatter",3]],["result",6]]],[11,"fmt","libceed::elem_restriction","View an ElemRestriction",9,[[["formatter",3]],["result",6]]],[11,"fmt","libceed::operator","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","libceed::qfunction","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","libceed::vector","View a Vector",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",19,[[["formatter",3]],["result",6]]],[11,"fmt","libceed","View a Ceed",17,[[["formatter",3]],["result",6]]]],"p":[[4,"MemType"],[4,"NormType"],[4,"TransposeMode"],[4,"QuadMode"],[4,"ElemTopology"],[4,"EvalMode"],[4,"BasisOpt"],[3,"Basis"],[4,"ElemRestrictionOpt"],[3,"ElemRestriction"],[3,"Operator"],[3,"CompositeOperator"],[4,"QFunctionOpt"],[3,"QFunction"],[3,"QFunctionByName"],[4,"VectorOpt"],[3,"Vector"],[3,"Ceed"],[3,"VectorView"],[3,"VectorViewMut"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);