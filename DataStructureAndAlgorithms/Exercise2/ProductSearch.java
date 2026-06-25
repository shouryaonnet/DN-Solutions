import java.util.*;
class Product {
    int productId;
    String productName;
    String category;
    Product(int productId, String productName, String category) {
        this.productId=productId;
        this.productName=productName;
        this.category=category;
    }
}

public class ProductSearch {
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId)return product;
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left=0;
        int right=products.length-1;
        while (left<=right) {
            int mid=left+(right-left)/2;
            if (products[mid].productId==targetId) {
                return products[mid];
            } else if (products[mid].productId<targetId) {
                left=mid+1;
            } else {
                right=mid-1;
            }
        }
        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(105, "Laptop", "Electronics"),
                new Product(101, "Mobile", "Electronics"),
                new Product(104, "Shoes", "Fashion"),
                new Product(103, "Watch", "Accessories"),
                new Product(102, "Book", "Education")
        };
        System.out.println("Linear Search:");

        Product result1=linearSearch(products,103);

        if (result1!=null) {
            System.out.println(result1);
        } else {
            System.out.println("Product Not Found");
        }
        Arrays.sort(products,Comparator.comparingInt(p ->p.productId));
        System.out.println("\nBinary Search:");
        Product result2 = binarySearch(products, 103);
        if (result2!=null) {
            System.out.println(result2);
        } else {
            System.out.println("Product Not Found");
        }
    }
}


/*Comparison of Linear Search and Binary Search
Linear Search checks each element one by one.
Best Case: O(1)
Average Case: O(n)
Worst Case: O(n)
Binary Search repeatedly divides a sorted array into two halves.
Best Case: O(1)
Average Case: O(log n)
Worst Case: O(log n)
Suitable Algorithm for an E-commerce Platform

Binary Search is more suitable for an e-commerce platform because it is much faster for large datasets. It reduces the search space by half in each step, resulting in a time complexity of O(log n). However, the product data must be sorted before performing Binary Search.*/