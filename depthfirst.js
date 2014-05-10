// create a test associative array, where the index is the node number and the values are the left and right neighbor node numbers
var depthArray = new Array();
depthArray[1] = [7,13];
depthArray[7] = [2,6];
// null means no neighbor on that side, double null means the end of the line
depthArray[2] = [null,null];
depthArray[6] = [5,11];
depthArray[5] = [null,null];
depthArray[11] = [null,null];
depthArray[13] = [null,9];
depthArray[9] = [4,null];
depthArray[4] = [null,null];

/* function to do a depth search of an array
 * input: (integer) search item
 * output: (boolean) if the search item is found */
function depthFirst(search,root)
{
	// if the searched for item is the same at the starting point (or root), then we are done, and we return true to the recursive function call below
	if(search == root)
	{
		return true;
	}
	// throw out bad input
	else if(search < 1)
	{
		throw("invalid input");
	}
	// if we have good input that is not the goal...
	else
	{
		// set to the found on left or right variable to false until we find something
		var onLeft = false;
		var onRight = false;
		// if there is a left hand neighbor, call that as the as the new root recursively
		if(depthArray[root][0] != null)
		{
			onLeft = depthFirst(search,depthArray[root][0]);
		}
		// if there is a right hand side has a neighbor, call that as the new root recursively
		if(depthArray[root][1] != null)
		{
			onRight = depthFirst(search,depthArray[root][1]);
		}
		// now that recursion has done it's magic we'll get the answer
		// if either left or right are true, we will get true, if both are false, we get false
		return(onLeft || onRight);
	}
}